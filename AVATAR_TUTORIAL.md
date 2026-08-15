# Avatar Tutorial — Photo → Cartoon → 3D Model → Portfolio

The hero currently uses a free CC0 placeholder robot model
(`public/models/avatar.glb`, "RobotExpressive" by Tomás Laulhé, modified by
Don McCurdy — see `public/models/CREDITS.md`). The pipeline below is how you
swap it for a 3D character of yourself.

**Your photo → stylized cartoon image (ChatGPT/Claude) → 3D `.glb` model (image-to-3D tool) → drop into this project.**

---

## Step 1 — Turn your photo into a stylized cartoon

1. Take (or pick) a clear, front-facing, full-body photo of yourself.
2. Open ChatGPT or Claude (a model with image generation) and upload the photo.
3. Ask it to turn the photo into a full-body, front-facing, Pixar/Disney-style
   3D cartoon character in a T-pose or relaxed A-pose, on a plain white
   background, head to toe visible, no cropping. Keep your face, hairstyle,
   and proportions recognizable.
4. Generate a few variations, keep the cleanest one, download as PNG.

## Step 2 — Convert the cartoon image into a 3D `.glb`

Use an image-to-3D generator (e.g. Meshy, Tripo, or
[hunyuanglobal.com](https://3d.hunyuanglobal.com/) which is free):

1. Choose **Image to 3D**, upload your Step 1 image.
2. Quality = high, enable PBR/textures, enable T-pose/symmetry if offered.
3. Generate, preview, regenerate if a limb or the face looks off.
4. Download as `.glb`.

## Step 3 — Optimize the `.glb` (recommended)

```bash
npx @gltf-transform/cli optimize input.glb avatar.glb --compress draco --texture-compress webp
```

Target under 2–3MB. Preview at <https://gltf-viewer.donmccurdy.com> first.

## Step 4 — Drop it in and tune

1. Replace `public/models/avatar.glb` with your file.
2. Tune scale/position in
   [src/components/Character/utils/character.ts](src/components/Character/utils/character.ts):
   ```ts
   model.scale.setScalar(0.38);      // ← resize your model
   model.position.set(0, -0.85, 0);  // ← move it down/up
   ```
3. Tune the camera in
   [src/components/Character/Scene.tsx](src/components/Character/Scene.tsx):
   ```ts
   camera.position.set(0, 0.15, mobile ? 4.3 : 4.8); // ← dolly in/out (z)
   camera.lookAt(0, 0.25, 0);                         // ← aim point
   ```
4. `npm run dev` and iterate — hot reload shows changes instantly.

> The loader (`character.ts`) doesn't require any specific bone/mesh names —
> it just centers, scales, and applies subtle breathing/head-tracking motion
> to the whole model, so any humanoid `.glb` works out of the box.

## Step 5 — Also worth updating

- Drop your actual `resume.pdf` into `public/` — the download buttons link to `/resume.pdf`.
- `public/models/char_enviorment.hdr` and `public/draco/*` are generic
  assets (lighting environment + Draco codec) — no need to change them.
