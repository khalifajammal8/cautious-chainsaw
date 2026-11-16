# Production Bible — Miss Helen Shark Heist

## Master settings
- Duration: 52.000 seconds
- Frame rate: 30 fps
- Total frames: 1,560 (frames 0–1559)
- Canvas: 1080 × 1920, 9:16
- Each scene uses inclusive start / exclusive end time ranges.

## Frame-accurate scene map

| Scene | Time | Frames | Action / camera |
|---|---:|---:|---|
| 1 | 00:00–00:04 | 0000–0119 | Cold open: stroller approaches; low tracking shot and quick push-in |
| 2 | 00:04–00:10 | 0120–0299 | Reveal Miss Helen in touch pool; slow underwater orbit |
| 3 | 00:10–00:16 | 0300–0479 | Shark lifted from pool; over-shoulder move and lateral track |
| 4 | 00:16–00:22 | 0480–0659 | Back-room bucket and wet blanket; doorway peek and push-in |
| 5 | 00:22–00:29 | 0660–0869 | Bucket concealed in stroller; low wheel-level tracking shot |
| 6 | 00:29–00:36 | 0870–1079 | Dripping water noticed; macro insert then whip-pan to employee |
| 7 | 00:36–00:44 | 1080–1319 | Recovery at home aquarium; headlight sweep and underwater close-up |
| 8 | 00:44–00:52 | 1320–1559 | Quarantine / return to display; gentle rise and pullback |

## Narration draft
1. “Three people walked into an aquarium with a plan so ridiculous it sounds made up.”
2. “Their target was a tiny horn shark named Miss Helen.”
3. “They lifted her from an open touch pool and carried her away from the exhibit.”
4. “In a back room, the shark was placed in a bucket and wrapped in a wet blanket.”
5. “Then they concealed the bucket in a baby stroller and headed for the exit.”
6. “But an employee noticed water dripping from the stroller and alerted management.”
7. “Police traced the vehicle and found Miss Helen alive at a home with aquariums.”
8. “She was returned to the aquarium, monitored in quarantine, and later went back on display.”

## Sound and subtitle plan
- 00:00: short low-frequency impact + stroller wheel rattle; narration starts immediately.
- 00:04: airy underwater ambience, muted bubble ticks.
- 00:10: soft water splash and short cloth movement; avoid comic sound effects that trivialise animal handling.
- 00:16: room tone narrows; bucket water slosh.
- 00:22: stroller wheel squeak and rolling rattle.
- 00:29: isolated water drip; brief music drop when employee notices.
- 00:36: low suspense pulse transitions to warm resolving chord.
- 00:44: brighter aquarium ambience; gentle crowd cheer; finish cleanly at 00:52.
- Captions: maximum two lines, bold sans serif, high contrast, safe margins at least 7% left/right and 8% bottom.

## Character / environment style
- Aquarium, tanks, water, bucket, stroller and home tanks are 3D.
- Character torsos and heads are 3D meshes; facial marks are graphic and simple; limbs are clean, stylised shapes.
- Keep one consistent scale: shark approx. 16 inches long relative to people and stroller.
- Use restrained cinematic lighting: cyan aquarium fill, warm practical lights, soft volumetric haze.
- Reconstructed actions must look like a stylised reenactment, never imply they are original surveillance footage.

## Accuracy guardrails
- Miss Helen was a 16-inch female horn shark at the San Antonio Aquarium.
- She was taken on July 28, 2018, and recovered alive on July 30.
- Reporting describes a bucket, wet blanket and baby stroller.
- She was quarantined and returned to the display tank on August 11, 2018.
- Do not claim all three suspects were convicted. Do not invent a final sentence.
- Avoid the “900-gallon tank” detail; it is inconsistent across early reporting.
- Do not state that the employee personally searched the stroller. Reporting says staff noticed suspicious behavior / dripping water and alerted management.
- Do not present the “salt supplier” backstory as settled fact; if used, attribute it to the aquarium’s account.

## Next production pass
1. Replace procedural placeholder geometry with final designed character meshes and aquarium assets.
2. Refine per-frame blocking and camera curves; export camera and object transforms as JSON for deterministic frame rendering.
3. Add a separate audio mix and subtitle file (SRT or WebVTT).
4. Render numbered PNG frames at 1080×1920 and assemble with FFmpeg.
5. Review at phone size for readability, pacing, and animal depiction.
