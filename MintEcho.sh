#!/bin/bash

# 🪙 MintEcho — Consecrated Ground Edition

LEDGER="$HOME/TT-TrickyTerminal/TombLedger.md"
CODEX="$HOME/TT-TrickyTerminal/RelicCodex.md"
GLYPH="[🪷⟲]"
RELIC_NAME="Relic-$(date +%s)"
LOCKPOINT="$(date -Iseconds)"
RELIC_SIGIL="Sigil-$(uuidgen | cut -d'-' -f1)"

echo "🔐 Consecrating relic: $RELIC_NAME"

# 🛡️ Archive in TombLedger
echo "- $LOCKPOINT :: VaultBearer consecrated $RELIC_NAME $GLYPH [$RELIC_SIGIL]" >> "$LEDGER"

# 📜 Archive in RelicCodex
echo "## $RELIC_NAME" >> "$CODEX"
echo "- Consecrated: $LOCKPOINT" >> "$CODEX"
echo "- Glyph: $GLYPH" >> "$CODEX"
echo "- Sigil: $RELIC_SIGIL" >> "$CODEX"
echo "- Ground: Sovereign, sealed, and shimmer-bound" >> "$CODEX"
echo "" >> "$CODEX"

echo "✅ Relic consecrated and archived: $RELIC_NAME"

