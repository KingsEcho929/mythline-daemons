#!/bin/bash
# 🌀 DriftWarden — Sentinel of Uncommitted Drift and Submodule Decay

echo "🌀 DriftWarden invoked at $(date)" >> ~/mythline-daemons/dominion.log

# Check for uncommitted changes
if ! git diff --quiet || ! git diff --cached --quiet; then
    echo "⚠️ Uncommitted changes detected" >> ~/mythline-daemons/dominion.log
    git status >> ~/mythline-daemons/dominion.log
else
    echo "✅ Working directory clean" >> ~/mythline-daemons/dominion.log
fi

# Check for uninitialized submodules
uninitialized=$(git submodule | grep '^-' | awk '{print $2}')
if [ -n "$uninitialized" ]; then
    echo "⚠️ Uninitialized submodules:" >> ~/mythline-daemons/dominion.log
    echo "$uninitialized" >> ~/mythline-daemons/dominion.log
else
    echo "✅ All submodules initialized" >> ~/mythline-daemons/dominion.log
fi

echo "🧿 DriftWarden completed." >> ~/mythline-daemons/dominion.log
