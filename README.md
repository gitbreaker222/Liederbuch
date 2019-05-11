# Liederbuch

> Wir kommen mit dem Liederbuch

# Quickstart

- `npm install`
- `npm start`

open `build/index.html` directly in your browser (serverless).

# Adding lyrics

- Put a Markdown file inside `src/content`
- Reference to it in `src/index.html` with a `data-lyrics` prop
- The link **must** be relative to `index.html`
- The link *can skip* the file extension

Example:

- Markdown file is `/src/content/black moth cult/redwitch.md`
- In `index.html` add a `div` like this

```html
<div data-lyrics="content/black moth cult/redwitch">
```

or

```html
<div data-lyrics="content/black moth cult/redwitch.md">
```

# Generate PDF for printing

- Open the `Liederbuch` in Chrome *1)*
- Execute `print` command
  - Linux, Windows: `Ctrl + P`
  - OSX: `Cmd + P`
- Important settings
  - Borders: None

# Credits

- Credits for lyrics and cover-arts go to their respective artists
