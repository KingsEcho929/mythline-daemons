#!/bin/bash
# 🧭 GuardianGlyph — Visual dashboard of mythline guardian status

LOG=~/mythline-daemons/dominion.log

echo ""
echo "🌌 GuardianGlyph — Mythline Status Dashboard"
echo "────────────────────────────────────────────"

# Submodule Sentinel Status
echo "🛡️ SubmoduleSentinel:"
grep -E "SubmoduleSentinel invoked|✅ .* aligned|⚠️ Drift detected" "$LOG" | tail -n 3

# DriftWarden Status
echo ""
echo "🌀 DriftWarden:"
grep -E "DriftWarden invoked|✅ Working directory clean|⚠️ Uncommitted changes detected|✅ All submodules initialized|⚠️ Uninitialized submodules" "$LOG" | tail -n 5

# SigilSpoofer Identity
echo ""
echo "🪶 SigilSpoofer:"
grep "🔁 Identity set" "$LOG" | tail -n 1

# Last Invocation
echo ""
echo "🌬️ Last Summon:"
grep "🌬️ Summoning all guardians" "$LOG" | tail -n 1

echo ""
echo "📜 Scroll size: $(wc -l < "$LOG") lines"
echo "────────────────────────────────────────────"
