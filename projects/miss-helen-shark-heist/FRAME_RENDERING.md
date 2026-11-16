# Frame Rendering and FFmpeg Assembly

## Current status
The browser preview is implemented. A deterministic PNG frame-exporter is a next engineering step and is not yet included. Do not treat the preview as a finished MP4.

## Target frame math
- 30 frames per second
- 52 seconds
- 1,560 frames total
- Valid frame indices: 0–1559
- For any frame index `n`, time is `n / 30` seconds.

| Scene | Start frame | End frame (exclusive) |
|---|---:|---:|
| 1 | 0 | 120 |
| 2 | 120 | 300 |
| 3 | 300 | 480 |
| 4 | 480 | 660 |
| 5 | 660 | 870 |
| 6 | 870 | 1080 |
| 7 | 1080 | 1320 |
| 8 | 1320 | 1560 |

## Run preview
```bash
npm install
npm run dev -- --host 0.0.0.0
```

## Recommended frame-export implementation
Use Playwright to open the Vite preview at a fixed 1080×1920 viewport. Add a development-only function to the app that accepts an integer frame index, sets every animated object's transform and camera from that frame, renders once, and returns the canvas as PNG. It must be deterministic: never advance animation by accumulated delta time.

## Assemble after PNG export
When `frames/frame-000000.png` through `frames/frame-001559.png` exist:
```bash
ffmpeg -framerate 30 -i frames/frame-%06d.png \
  -c:v libx264 -pix_fmt yuv420p -crf 18 -movflags +faststart \
  miss-helen-preview.mp4
```

## Add narration and music
After recording narration as `voice.wav` and selecting licensed music as `music.wav`:
```bash
ffmpeg -i miss-helen-preview.mp4 -i voice.wav -i music.wav \
  -filter_complex "[1:a]volume=1.0[v];[2:a]volume=0.18[m];[v][m]amix=inputs=2:duration=first:dropout_transition=2[a]" \
  -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -shortest \
  miss-helen-final.mp4
```

Review the complete output on a phone before publishing. Check captions, safe areas, audio levels, scene continuity, and factual wording.
