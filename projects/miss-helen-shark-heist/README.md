# Miss Helen — The Shark Stolen in a Baby Stroller

A code-first, editable 9:16 Three.js animation previs for a 52-second YouTube Short.

## Run locally
1. Install Node.js 20+.
2. From this folder run `npm install`.
3. Run `npm run dev -- --host 0.0.0.0`.
4. Open the local Vite URL. Use the timeline, scene buttons, pause and play controls.

## Render workflow
This is a browser-based animation preview, not a finished MP4 renderer. Record the preview with OBS or capture frames with Playwright/FFmpeg after approving the timing. Keep the browser at 1080x1920 for final capture. Narration and sound effects are listed in `PRODUCTION_BIBLE.md` and are not embedded as generated audio.

## Visual direction
- 1080 × 1920 portrait, 30 fps, 52 seconds (1,560 frames).
- Stylised 3D aquarium sets and props.
- Character bodies are 3D; faces and simple limbs use a graphic, 2D-inspired treatment.
- Reconstructed scenes are illustrative, not actual surveillance footage.

## Controls
- Play / pause / restart
- Scrub the complete 0–52 second timeline
- Jump to any of the eight scenes
- Toggle narration caption overlay

## Story accuracy
Miss Helen was a 16-inch female horn shark taken from the San Antonio Aquarium on July 28, 2018. She was recovered alive on July 30, quarantined, and returned to display on August 11. Do not present reconstructed visuals as original footage.
See `SOURCES.md` and `PRODUCTION_BIBLE.md`.
