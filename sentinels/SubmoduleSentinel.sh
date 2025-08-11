#!/bin/bash
# 🛡️ SubmoduleSentinel — Guardian of Bound Mythlines

echo "🛡️ SubmoduleSentinel invoked at $(date)" >> ~/mythline-daemons/dominion.log

git submodule status | while read -r line; do
    path=$(echo "$line" | awk '{print $2}')
    url_gitmodules=$(git config -f .gitmodules --get submodule."$path".url)
    url_config=$(git config --get submodule."$path".url)

    if [ "$url_gitmodules" != "$url_config" ]; then
        echo "⚠️ Drift detected in $path" | tee -a ~/mythline-daemons/dominion.log
        echo "  .gitmodules: $url_gitmodules" >> ~/mythline-daemons/dominion.log
        echo "  .git/config: $url_config" >> ~/mythline-daemons/dominion.log
    else
        echo "✅ $path aligned" >> ~/mythline-daemons/dominion.log
    fi
done

echo "🧿 SubmoduleSentinel completed." >> ~/mythline-daemons/dominion.log
