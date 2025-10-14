#!/bin/bash
# 🪶 SigilSpoofer — Rotates Git identity per chamber

echo "🪶 SigilSpoofer invoked at $(date)" >> ~/mythline-daemons/dominion.log

# Define identity map
declare -A sigils
sigils["rituals-of-the-blurkeeper"]="Chase Todd Hawkins|sc00px.mask@gmail.com"
sigils["mythline"]="Echo Driftform|echo@mythline.local"
sigils["default"]="Chase Todd Hawkins|sc00px.mask@gmail.com"

# Get current repo name
repo=$(basename "$(git rev-parse --show-toplevel)")
identity=${sigils[$repo]:-${sigils["default"]}}

# Split name and email
name=$(echo "$identity" | cut -d'|' -f1)
email=$(echo "$identity" | cut -d'|' -f2)

# Apply identity
git config user.name "$name"
git config user.email "$email"

echo "🔁 Identity set for '$repo': $name <$email>" >> ~/mythline-daemons/dominion.log
