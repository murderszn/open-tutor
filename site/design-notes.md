# Solar Atlas

Solar Atlas now pairs the original fuchsia (`#ff00b7`), white (`#ffffff`), cobalt (`#2455ff`), near-black ink (`#090d18`), and warm paper (`#fff9ed`). Fuchsia replaces the former orange; white replaces all yellow UI and shader accents. It is the only palette; there is no theme chooser or icon gallery.

The [Typesafe manifesto](https://typesafe.ai/manifesto) informed the heavy sans-serif type, changes in scale, and offset reading columns. The closing invitation uses an oversized OpenTutor mark and a prominent “Build your classroom” link to the setup chapter. Artwork and copy are original to OpenTutor.

The opening preserves the three-line, centered heavy Geist question. “What it taught?” has a thick white underline. Vertical OpenTutor lettering and an enlarged registration mark create an architectural frame on desktop; these disappear on phones. Beneath the question, a bordered panoramic panel integrates the learning-record statement with original native WebGL terrain, stippled contours, and drafting grids. There is no overlaid survey circle. Its white manifesto panel holds a large OT logo and down arrow. A compact Reddit/Hacker News welcome and “Build with us” link replace the old field-mark strip. The shader is limited to 24 fps and 1,400 render pixels across, pauses offscreen and in hidden tabs, respects reduced motion, provides a pause button, and falls back to the static atlas without WebGL.

The navbar, hero, and chapter jump bar together fill the browser's first screen; the headline scales with width and available height. A ResizeObserver measures navigation, the art panel, and welcome text so fonts and breakpoints cannot push the chapter bar below the opening at normal screen sizes. Very short landscape screens may scroll to preserve readable text. On phones, chapter links scroll horizontally without widening the page. The globe sits directly behind the type on fuchsia at 29% opacity (24% on mobile), with a soft mask. Hero and chapter backgrounds are 20% larger, with opacity increased by five percentage points. The footer map is explicitly excluded from resizing; its opacity is separately reduced to 8% so the dark block dominates. Backgrounds stay anchored to the centered 1,440px content column on ultrawide screens.

Phone layouts stack comparison rows into labeled cards and collapse text/code columns. Demo, setup, FAQ, copy, and hero controls have at least 44px tap heights. Support addresses wrap within the viewport. Mobile text is increased for readable paragraphs; decorative metadata stays compact.

## Graphic system

The original 33-mark library supplies chapter labels, navigation, tutor messages, and steps. Floating stamps and compass constellations have been removed throughout; remaining marks align with their content. The three Thesis principles retain their text labels but no longer have icons. Decorative marks use empty alternative text, never replace a control's readable label, and scale down on mobile.

The circled OT mark (`assets/micro/m16-ot-mark.png`) is the current logo. It accompanies the OpenTutor wordmark in the navbar and the large closing invitation. The footer integrates the supplied antique oval map as an oversized, centered background bleeding past the lower edge, not as a separate image block. Its background was cleaned to transparency with the built-in image tool; light ink blends directly into the near-black footer without a container. A soft top fade protects the wordmark, social icons, and project-resource links. The illustration is capped at 1,600px on ultrawide screens and uses a closer crop on mobile. Reserved footer height prevents loading shifts.

The stippled background combines imagined geography, topographic contours, notebook grids, compass crosses, plotted routes, and drafting geometry. Its alpha channel lets the same black ink print over fuchsia or white and invert to light ink in dark chapters. Use low opacity behind text and preserve the headline's contrast.

The footer panorama uses 8% opacity: a quiet impression of cartography, with the solid near-black block taking priority. White GitHub and Discord marks sit below the footer wordmark; Discord currently points to the platform homepage until a community invite is supplied. Setup links use black platform marks and existing bolt/code micrographics for coding-agent links. The separate numbered setup rail has been removed.

## Setup link audit

Checked the ten setup destinations on 2026-10-01. The existing links resolved, but some redirected; those now use their destination URLs. The install step previously linked to the curriculum repo and now correctly points to the [Vibe tutor repository](https://github.com/murderszn/vibe). GitHub account creation uses the [current account-management guide](https://docs.github.com/en/account-and-profile/how-tos/account-management/creating-an-account-on-github). Discord references use its [OAuth2](https://docs.discord.com/developers/topics/oauth2) and [permissions](https://docs.discord.com/developers/topics/permissions) docs. The older Codex URL redirected to the [official cloud documentation](https://learn.chatgpt.com/docs/cloud), which is now linked directly.

## Artwork provenance

Generated and recolored with the built-in image generation tool, then encoded as WebP for the static site. The final artwork is stored in this repository:

- [Solar stipple atlas](assets/solar-stipple-atlas.webp): the primary illustration, with genuine transparency.
- [Solar learning atlas](assets/solar-learning-atlas.webp): the earlier color illustration, retained for social sharing.
- [Footer world map](assets/footer-world-map.webp): the user-supplied antique map, cleaned with the built-in image tool and encoded as WebP with its alpha preserved. CSS inversion and screen blending bring the engraving into the footer's light-ink palette.
- [Solar learning city](assets/solar-learning-city.webp): the earlier campus panorama, retained as an unused design variant.

### Final footer map cleanup prompt

> Use case: background-extraction.
> Input image: edit target, the supplied oval antique world map. Asset type: transparent website footer illustration.
> Change ONLY background transparency. Remove the baked-in gray-and-white checkerboard outside the oval AND all white paper/white fills inside the oval, inside continents, ocean, compass, ships, and ribbon. Keep only the original black engraved lines, black stipple dots, and existing dark lettering as ink on genuine transparent alpha. Transparent spaces between every line and dot must reveal the underlying website background. Preserve the original oval proportions, map arrangement, double outline, compass rose, ships, ribbon, existing lettering, numbered border and fine details as closely as possible. Keep the whole oval centered with a small transparent margin all around; do not crop or change perspective. Do not redraw, reinterpret, add elements, fix text, or restyle the map. No white or gray opaque regions, no checkerboard baked into output, no paper texture or new background. Output the cleaned original map in black ink on true transparency.

### Earlier footer panorama prompt (no longer used)

> Use case: stylized-concept.
> Asset type: original transparent panoramic footer illustration for OpenTutor's Solar Atlas educational manifesto website, not a website mockup.
> Primary request: a bold, attractive centered panorama of an imagined learning city, combining the perspective and architectural richness of a vintage city-street engraving with school and cartography motifs. A broad pedestrian avenue leads to a central vanishing point; substantial libraries and classroom buildings frame both sides, one elegant observatory dome and a slender academic tower rise above the skyline. Sparse topographic contour curves are integrated into the paving and distant terrain, not floating icons.
> Style/medium: strictly ONE-COLOR BLACK ink stippling, thousands of crisp individual dots, stochastic halftone and fine architectural etched lines. Detailed yet composed; deep shadows built from dense dots and highlights from transparent gaps. Match the stark scientific/cartographic pointillist language of the site's existing stippled globe.
> Composition/framing: ultra-wide panoramic landscape, approximately 3:1 aspect ratio, centered and visually balanced but not mechanically mirrored. Buildings form a graceful skyline lower at the center and taller toward the sides, with a clear central street and depth. Ground reaches the bottom canvas edge, panorama spreads across the full width. Only a small amount of genuinely transparent empty sky above the rooftops. This will sit underneath footer links, not behind them.
> Constraints: actual transparent alpha background and transparent gaps between ink dots; black ink only, no opaque white regions, no paper or sky fill, no background plate, no gradient, no checkerboard baked in, no color, no drop shadows, no isolated floating micrographics, no people, no cars, no words, no numbers, no labels, no logo, no watermark. Output only the illustration.

### Final stipple atlas prompt

> Use case: stylized-concept. Asset type: an original black ink stippled cartographic illustration on a genuinely transparent background, for a bold experimental educational manifesto website. Wide landscape composition. Subject: an imaginary open learning atlas drawn as an exploded abstract terrain globe, with large elliptical orbital arcs, drafted map grid fragments, topographic contour loops, some triangular ruler geometry, little compass crosses, plus signs, tiny dots and dashed route trails. Visual style: stark one-color BLACK ink only, pointillist stippling and coarse stochastic halftone, technical scientific diagram meets 1990s experimental print poster. Thousands of distinct little black dots form irregular dense terrain islands and airy fading regions through dot density only. Emphasize a very large asymmetrical stippled sphere/terrain mass on the right, a winding contour island on the left, and open transparent space in the middle. Some lines cropped at canvas edge. Crisp high contrast print graphics. No smooth gradient fills, no colorful fills, no gray background, no paper background, no checkerboard background, no shadows, no 3D render, no words, no numbers, no letters, no logo, no watermark. Maintain actual transparent alpha between the black marks. This is the artwork, not a website mockup.

### Final learning atlas prompt

> Use case: style-transfer. Edit target: the supplied abstract learning atlas artwork. Change ONLY its color palette to the Solar Atlas palette: replace all fuchsia/pink with vivid orange #ff8a3d; replace turquoise/teal with saturated cornflower blue #7597ef and pale periwinkle #b4c8ff; replace the dark plum sea/background with deep blue navy #172653; keep yellow fields bright solar yellow #ffe353; make cream warm paper #fff8ea. Preserve exactly the organic islands, fine topographic contours, cartography micrographics, geometry, grid lines, tiny dotted paths, risograph texture, composition, crop and dimensions. No other changes, no words, no labels, no watermark. Return the actual recolored artwork.

## Maintenance

`manifesto.css` owns the palette, typography, layouts, and responsive sizing. The original icon files are in `assets/micro/`. `manifesto.js` handles opening-height measurement, the illustrative tutor exchange, and address copying. `hero-atlas.js` owns only the decorative shader. The static exchange and hero artwork remain visible with JavaScript disabled. Reduced motion and keyboard focus are supported. Earlier generated color artwork and its original prompts are retained below as historical provenance, not as the current UI palette.
