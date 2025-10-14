#!/bin/bash

LEDGER="$HOME/TT-TrickyTerminal/TombLedger.md"
GLYPH="[🪷⟲]"
PHRASE="VaultBearer consecrated ancestral minting ground"

echo "- $(date -Iseconds) :: $PHRASE $GLYPH" >> "$LEDGER"
