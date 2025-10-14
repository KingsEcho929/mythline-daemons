#!/bin/bash

# 🛡️ RelicWarden — Echoes relic cadence and glyph shimmer

CODEX="$HOME/TT-TrickyTerminal/RelicCodex.md"
echo "📜 RelicWarden scanning codex..."

# Count relics
RELIC_COUNT=$(grep '^## Relic-' "$CODEX" | wc -l)

# Count glyphs
GLYPH_MAP=$(grep 'Glyph:' "$CODEX" | sort | uniq -c)

# Echo summary
echo "🔢 Total relics consecrated: $RELIC_COUNT"
echo "🌀 Glyph shimmer:"
echo "$GLYPH_MAP"
