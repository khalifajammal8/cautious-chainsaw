# Khalifa AI Shorts Studio

Mobile-first, local-first browser prototype for producing vertical 9:16 Shorts.

## Current features
- Project brief generator for ChatGPT-assisted research and scripting
- Editable scene storyboard with narration, captions, visual direction and duration
- Per-scene image upload
- Optional voiceover and background music
- Canvas preview with gentle motion for still images
- Browser MediaRecorder export (usually WebM on Android Chrome)
- Local draft save/load and project JSON export
- Installable PWA shell and basic offline caching

## Deploy
1. In repository Settings > Pages, set Source to **GitHub Actions**.
2. The workflow in .github/workflows/deploy.yml deploys the site on pushes to main.
3. Wait for the Pages deployment to complete, then open the Pages URL.

## Important limitations
- No hosted AI model/API is bundled; use ChatGPT for research, fact-checking, scripts and prompts.
- Android browser export support varies. The app checks MediaRecorder support; WebM is expected on Chrome Android.
- Audio/image assets are local to the current session and are not included in saved drafts.
- This is a prototype; test on-device before relying on it for production.
