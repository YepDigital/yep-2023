# Yep Digital

Current live site hosted on statichost.eu

## GitHub Pages deployment

This project builds with Eleventy and deploys the generated `_site` directory via GitHub Actions.

- For project Pages URLs (`https://<user>.github.io/<repo>/`), path prefixing is enabled automatically in CI.
- For user/org Pages repos (`https://<user>.github.io/`), the prefix is `/`.
- You can override either behavior with `ELEVENTY_PATH_PREFIX` (for example `ELEVENTY_PATH_PREFIX=/my-prefix/`).
