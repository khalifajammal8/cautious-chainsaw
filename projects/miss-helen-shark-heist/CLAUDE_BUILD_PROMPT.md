# Claude Build / Refinement Prompt — Miss Helen Shark Heist

You are refining an existing Vite + Three.js animation project in `projects/miss-helen-shark-heist/`.

## Non-negotiable goal
Create an editable, code-driven 52-second YouTube Short reenactment. Do NOT generate a video with a text-to-video model. Keep all scenes, timing, cameras, objects and captions editable in JavaScript.

## Current files
- `index.html`: portrait preview UI and controls
- `src/story.js`: exact 8-scene time ranges, captions and narration
- `src/main.js`: procedural Three.js previs
- `PRODUCTION_BIBLE.md`: shot plan, narration, audio and factual guardrails
- `SOURCES.md`: source links

## Target
- 1080x1920, 9:16, 30fps, 52 seconds, exactly 1,560 frames.
- Stylised cinematic 3D aquarium / home-aquarium environments.
- Characters: 3D torsos and heads, with simplified graphic 2D-inspired facial features and clean stylised limbs.
- Shark, stroller, bucket, tanks, water and props are 3D.
- Keep Miss Helen visually consistent and approximately 16 inches relative to people and stroller.
- Strong camera blocking, smooth keyframed movement, readable captions and mobile-first composition.

## Required next improvements
1. Inspect and run the current project before editing. Fix runtime errors first.
2. Replace primitive placeholder shapes with cohesive custom low-poly / stylised meshes. Avoid stock-looking generic assets.
3. Add a reusable keyframe timeline system with deterministic `updateFrame(frame)`; every object transform and camera transform must be a pure function of frame so a frame can be rendered repeatedly with identical output.
4. Implement per-scene keyframes at 30fps using easing curves. Do not use frame-rate-dependent incremental position changes.
5. Add camera focal length, depth staging, aquarium caustic lighting, floating particles, tank reflections and subtle volumetric atmosphere without harming Android performance.
6. Build the stroller accurately enough to read instantly: handle, canopy, seat, basket and four wheels. Keep the shark safely inside a water bucket, with a wet blanket as a visual cover.
7. Improve the employee noticing the drip: show 2–3 distinct droplets falling, employee head turn, then phone action. Avoid creating new meshes every animation frame.
8. Improve the home recovery scene with several illuminated aquarium tanks and a clear live-shark reveal.
9. Create a separate subtitle file with line breaks and timecodes, plus a narration recording guide. Captions must be legible on a phone.
10. Add a deterministic frame-export mode (PNG sequence) and document FFmpeg assembly. Do not claim MP4 export works until tested.
11. Test `npm install`, `npm run build`, and preview on a narrow mobile viewport. Fix all errors and report any untested steps honestly.

## Story timing
Use the exact scene timings in `src/story.js` and `PRODUCTION_BIBLE.md`. Keep the opening hook within the first 0.5 seconds. Do not extend beyond 52 seconds without asking.

## Factual guardrails
Miss Helen was a 16-inch female horn shark taken from the San Antonio Aquarium on July 28, 2018. She was recovered alive on July 30, quarantined, and returned to display on August 11. The scenes are visual reconstructions, not actual CCTV. Avoid inventing convictions, sentences, or disputed details. Keep the narration aligned with the cited sources.

## Deliverables
- Updated runnable source code in this folder
- `SUBTITLES.srt`
- `FRAME_RENDERING.md`
- Updated `PRODUCTION_BIBLE.md`
- A concise change log and honest test results

Do not replace this with a generated video or a static storyboard.