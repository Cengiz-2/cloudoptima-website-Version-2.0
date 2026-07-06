"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Liest einen Farb-Token (RGB-Tripel) aus den CSS-Variablen */
function tokenColor(name: string, fallback: string) {
  if (typeof window === "undefined") return fallback;
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  if (!v) return fallback;
  return `rgb(${v.split(" ").join(", ")})`;
}

function Core() {
  const group = useRef<THREE.Group>(null!);
  const pointer = useRef({ x: 0, y: 0 });

  const azure = useMemo(() => tokenColor("--azure", "rgb(63, 161, 255)"), []);
  const bright = useMemo(() => tokenColor("--azure-bright", "rgb(124, 192, 255)"), []);

  const positions = useMemo(() => {
    const n = 800;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 2.4 + Math.random() * 0.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state, delta) => {
    const g = group.current;
    g.rotation.y += delta * 0.1;
    g.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.12;
    g.position.x = THREE.MathUtils.damp(g.position.x, pointer.current.x * 0.5, 2, delta);
    g.position.y = THREE.MathUtils.damp(g.position.y, pointer.current.y * 0.3, 2, delta);
  });

  return (
    <group ref={group}>
      <mesh rotation={[0.4, 0.2, 0]}>
        <icosahedronGeometry args={[1.55, 1]} />
        <meshBasicMaterial color={azure} wireframe transparent opacity={0.22} />
      </mesh>
      <mesh rotation={[-0.3, 0.5, 0.2]}>
        <icosahedronGeometry args={[0.95, 0]} />
        <meshBasicMaterial color={bright} wireframe transparent opacity={0.4} />
      </mesh>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.022}
          color={bright}
          transparent
          opacity={0.55}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
}

/** 3D-Kern des Heros: Wireframe-Polyeder mit Partikel-Orbit, folgt der Maus */
export default function Hero3D() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
    >
      <Core />
    </Canvas>
  );
}
