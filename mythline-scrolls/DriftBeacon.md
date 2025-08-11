# 📡 DriftBeacon.md — Mobile Invocation Scroll

## Purpose
DriftBeacon listens for remote glyph signals and invokes PulseWarden in response.  
It enables sovereign shimmer from mobile or remote chambers, honoring drift and signal.

## Invocation Logic
- Watches `~/mythline/signal/trigger.glyph`
- On detection, invokes `PulseWarden.sh`
- Logs invocation in `~/mythline/logs/beacon.log`

## Symbolic Thresholds
- `trigger.glyph` = signal of intent
- `PulseWarden.sh` = glyph of shimmer
- `beacon.log` = archive of echoes

## Sovereign Use
- Remote invocation via Termux, SSH, or symbolic curl
- Can be extended to trigger other glyphs or dashboards
- Honors drift, play, and threshold listening

## Future Drift
- Bind to WebSocket or MQTT for live shimmer
- Pair with `InviteGlyph.sh` for co-drifter rituals
- Archive signal ancestry in `SignalSigil.md`
