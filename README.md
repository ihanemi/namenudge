# NameNudge

A simple, safe, preview-first batch file renamer.

## Status

Early development — Milestone 0 (Bootstrap).
The React + TypeScript frontend and Tauri desktop shell are initialized.
The app currently displays a placeholder screen; it cannot select or rename files yet.

## Core idea

Select files, choose a numeric group in the filename, apply an offset,
preview and validate the result, then rename safely.
No real files should change until the user explicitly starts the rename.

## Planned v0.1 features

- Select multiple files and detect numeric groups in their names.
- Apply a positive or negative numeric offset to a selected group.
- Preview changes while preserving file extensions.
- Validate names and detect collisions before execution.
- Rename safely without silent overwrites, using temporary names for batch conflicts.
- Undo the last batch.

Example of a planned `+1` transformation:

```text
1.png -> 2.png
2.png -> 3.png
3.png -> 4.png

test.test12.file -> test.test13.file
```

## Stack and platforms

- Rust: rename logic and filesystem operations.
- Tauri 2: desktop shell and frontend/backend communication.
- React + TypeScript: user interface.
- Vite: frontend development and builds.

Desktop comes first, with Windows as the initial target, then Linux.
Android is planned for a later milestone.

## Development

### Prerequisites

- Node.js 22.13 or newer in the Node.js 22 series, with npm.
- Rust stable with Cargo, rustfmt, and Clippy.
- On Windows: Microsoft C++ Build Tools with the Desktop development with C++
  workload and the WebView2 runtime.

Run these commands from the repository root. In PowerShell, use `npm.cmd`
if execution policy prevents running `npm.ps1`.

```sh
npm ci
npm run tauri dev
```

For frontend-only development in a browser:

```sh
npm run dev
```

### Checks

```sh
npm run lint
npm run build
cargo fmt --manifest-path src-tauri/Cargo.toml --check
cargo clippy --manifest-path src-tauri/Cargo.toml
cargo test --manifest-path src-tauri/Cargo.toml
cargo check --manifest-path src-tauri/Cargo.toml
```

The Rust scaffold currently has no tests; core logic tests will arrive with Milestone 1.
`npm run build` builds the frontend only. To build the desktop application:

```sh
npm run tauri build
```

### Project layout

```text
src/          React + TypeScript frontend
src-tauri/    Rust backend and Tauri configuration
```

The rename core will be independent of the UI and Tauri commands.
The next milestone covers filename parsing, numeric groups, offsets, and unit tests.

## License

[MIT](LICENSE)
