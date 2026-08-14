#!/usr/bin/env bash
# Meldet geänderte URLs per IndexNow an Bing, Yandex, Seznam und Naver.
# Google nutzt IndexNow nicht, dafür bleibt die Search Console zuständig.
#
# Nach einem Deploy aufrufen:
#   bash scripts/indexnow.sh                  # meldet alle Seiten aus der Sitemap
#   bash scripts/indexnow.sh /nis2 /preise    # meldet nur einzelne Pfade
#
# Die Schlüsseldatei liegt unter public/<key>.txt und muss unter
# https://cloudoptima.de/<key>.txt erreichbar sein, sonst lehnt IndexNow ab.

set -euo pipefail

HOST="cloudoptima.de"
KEY="3d81e6c4b0446f8ca4044f3a257c07d5"
KEY_LOCATION="https://${HOST}/${KEY}.txt"

if [ "$#" -gt 0 ]; then
  URLS=()
  for p in "$@"; do URLS+=("https://${HOST}${p}"); done
else
  # Alle URLs aus der veröffentlichten Sitemap ziehen
  mapfile -t URLS < <(curl -fsS "https://${HOST}/sitemap.xml" \
    | grep -o '<loc>[^<]*</loc>' \
    | sed 's|</\?loc>||g')
fi

if [ "${#URLS[@]}" -eq 0 ]; then
  echo "Keine URLs gefunden, Abbruch." >&2
  exit 1
fi

# Schlüsseldatei prüfen, bevor gemeldet wird
if ! curl -fsS "$KEY_LOCATION" | grep -q "^${KEY}$"; then
  echo "Schlüsseldatei unter ${KEY_LOCATION} nicht erreichbar oder falscher Inhalt." >&2
  echo "Erst deployen, dann erneut versuchen." >&2
  exit 1
fi

echo "Melde ${#URLS[@]} URLs an IndexNow ..."
printf '%s\n' "${URLS[@]}"

PAYLOAD=$(printf '%s\n' "${URLS[@]}" \
  | sed 's/.*/"&"/' \
  | paste -sd, - \
  | sed "s|^|{\"host\":\"${HOST}\",\"key\":\"${KEY}\",\"keyLocation\":\"${KEY_LOCATION}\",\"urlList\":[|; s|$|]}|")

CODE=$(curl -s -o /dev/null -w '%{http_code}' -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "$PAYLOAD")

case "$CODE" in
  200|202) echo "OK (HTTP $CODE), Meldung angenommen." ;;
  400) echo "HTTP 400: ungültiges Format." >&2; exit 1 ;;
  403) echo "HTTP 403: Schlüssel nicht akzeptiert, Schlüsseldatei prüfen." >&2; exit 1 ;;
  422) echo "HTTP 422: URLs passen nicht zum Host." >&2; exit 1 ;;
  429) echo "HTTP 429: zu viele Anfragen, später erneut." >&2; exit 1 ;;
  *)   echo "Unerwarteter Status: HTTP $CODE" >&2; exit 1 ;;
esac
