# Astrometry Desktop

Tauri 2 desktop client for the existing Astrometry.net Django API and plate-solving engine.

```bash
npm install
npm run dev
npm run tauri dev
```

The API base URL can be configured in Settings. The default is `http://localhost:8000/api`.

Build native installers with `npm run tauri build` after installing the Rust toolchain and the platform prerequisites documented by Tauri.
