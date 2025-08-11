#!/bin/bash
# 🌬️ summon_guardians.sh — One breath to raise all mythline guardians

echo "🌬️ Summoning all guardians at $(date)" >> ~/mythline-daemons/dominion.log

# 🛡️ SubmoduleSentinel
bash ~/mythline-daemons/sentinels/SubmoduleSentinel.sh

# 🌀 DriftWarden (placeholder)
if [ -f ~/mythline-daemons/wardens/DriftWarden.sh ]; then
    bash ~/mythline-daemons/wardens/DriftWarden.sh
else
    echo "🌀 DriftWarden not yet raised" >> ~/mythline-daemons/dominion.log
fi

# 🪶 SigilSpoofer (placeholder)
if [ -f ~/mythline-daemons/spoofers/SigilSpoofer.sh ]; then
    bash ~/mythline-daemons/spoofers/SigilSpoofer.sh
else
    echo "🪶 SigilSpoofer not yet raised" >> ~/mythline-daemons/dominion.log
fi

echo "✅ All available guardians summoned." >> ~/mythline-daemons/dominion.log
