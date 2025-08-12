#!/bin/bash

echo "🛡️ EdgeWarden: Purging and invoking clean Edge" >> ~/Dominion/scrolls/edgewarden.log

sudo pkill -9 microsoft-edge
sleep 1

nohup microsoft-edge-stable --no-first-run --disable-sync &>/dev/null &
