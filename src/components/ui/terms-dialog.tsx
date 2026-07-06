"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { EASE } from "@/lib/motion";

type TermsDialogProps = {
  trigger: React.ReactNode;
  title: string;
  children: React.ReactNode;
};

/**
 * Modal mit scrollbarem Inhalt (shadcn terms-conditions Dialog),
 * animiert über AnimatePresence statt CSS-Keyframes.
 */
export function TermsDialog({ trigger, title, children }: TermsDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[90] bg-void/75 backdrop-blur-sm"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount>
              <motion.div
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.97 }}
                transition={{ duration: 0.28, ease: EASE }}
                className="fixed inset-0 z-[100] m-auto flex h-fit max-h-[82vh] w-[min(92vw,40rem)] flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-card"
              >
                <div className="flex items-center justify-between border-b border-line px-6 py-4">
                  <Dialog.Title className="font-display text-lg font-semibold text-ink">
                    {title}
                  </Dialog.Title>
                  <Dialog.Close
                    aria-label="Schließen"
                    className="rounded-lg p-1.5 text-ink-mute transition-colors hover:bg-raised hover:text-ink"
                  >
                    <X className="h-5 w-5" />
                  </Dialog.Close>
                </div>
                <div className="overflow-y-auto px-6 py-5 text-sm leading-relaxed text-ink-soft">
                  {children}
                </div>
                <div className="border-t border-line px-6 py-4 text-right">
                  <Dialog.Close className="rounded-full bg-azure px-5 py-2 font-display text-sm font-medium text-void transition-transform hover:scale-[1.03] active:scale-95">
                    Verstanden
                  </Dialog.Close>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
