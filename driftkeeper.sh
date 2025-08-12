#!/bin/bash
# driftkeeper.sh — Entity of download drift and sovereign purge

DOWNLOADS="$HOME/Downloads"
LOG="$HOME/Dominion/scrolls/driftkeeper.log"

echo "🧹 DriftKeeper invoked on $(date)" >> "$LOG"

# Find duplicate filenames
echo "🔍 Duplicate filenames:" >> "$LOG"
find "$DOWNLOADS" -type f -exec basename {} \; | sort | uniq -d >> "$LOG"

# Find files older than 30 days
echo "🕰️ Files older than 30 days:" >> "$LOG"
find "$DOWNLOADS" -type f -mtime +30 >> "$LOG"

echo "✅ Scan complete." >> "$LOG"
