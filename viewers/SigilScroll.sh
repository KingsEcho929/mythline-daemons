#!/bin/bash
# 📜 SigilScroll — Viewer of Dominion Logs and Guardian Echoes

LOG=~/mythline-daemons/dominion.log

echo "📜 SigilScroll invoked at $(date)"
echo "────────────────────────────────────────────"
echo "🧿 Recent Guardian Activity:"
echo ""

# Show last 50 lines with color highlights
tail -n 50 "$LOG" | while read -r line; do
    if [[ "$line" == *"⚠️"* ]]; then
        echo -e "\033[1;31m$line\033[0m"  # Red for warnings
    elif [[ "$line" == *"✅"* ]]; then
        echo -e "\033[1;32m$line\033[0m"  # Green for success
    elif [[ "$line" == *"🔁"* ]]; then
        echo -e "\033[1;36m$line\033[0m"  # Cyan for identity rotation
    elif [[ "$line" == *"🛡️"* || "$line" == *"🌀"* || "$line" == *"🪶"* ]]; then
        echo -e "\033[1;35m$line\033[0m"  # Magenta for guardian invocation
    else
        echo "$line"
    fi
done

echo ""
echo "────────────────────────────────────────────"
echo "📘 End of Scroll"
