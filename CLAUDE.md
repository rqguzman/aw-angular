# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

`aw-angular` (package name `test-project`) is a small Angular 8 demo app (generated with Angular CLI 1.4.3, later upgraded) that manages a list of "funcionários" (employees): a form adds an employee to an in-memory array, and each one is rendered as a card. There is no backend — `app.component.ts` holds the `funcionarios` array in memory and no HTTP calls are made.

This repo is the frontend counterpart described in the parent workspace's `claude-playground/.claude/CLAUDE.md`: a SPA that would talk to a separately hosted backend via REST/OpenAPI, but that integration is not wired up here.

## Commands

Uses the classic Angular CLI (v1-style) `ng` scripts defined in `package.json`:

- `npm start` / `ng serve` — dev server at `http://localhost:4200/`, auto-reloads on change.
- `npm run build` / `ng build` — production build artifacts output to `dist/`.
- `npm test` / `ng test` — unit tests via Karma + Jasmine (Chrome launcher, watches by default).
  - Run a single spec by temporarily using `fdescribe`/`fit` in the spec file, or pass Karma args, e.g. `ng test --single-run`.
- `npm run lint` / `ng lint` — TSLint over `src/tsconfig.app.json`, `src/tsconfig.spec.json`, and `e2e/tsconfig.e2e.json` (config in `tslint.json`).
- `npm run e2e` / `ng e2e` — Protractor end-to-end tests (config in `protractor.conf.js`, spec in `e2e/`).

## Architecture

- Angular CLI v1-style layout: app config lives in `.angular-cli.json` (not `angular.json`), single `apps[0]` entry with `root: src`, `outDir: dist`, prefix `app`.
- `src/app/app.module.ts` is the single `NgModule` — only `BrowserModule` and `FormsModule` are imported (template-driven forms via `ngModel`, no `ReactiveFormsModule`, no `HttpClientModule`, no `RouterModule`).
- Component structure is flat, one directory per component under `src/app/`:
  - `app.component.*` — root component; owns the `funcionarios` array as component state and passes data down via `@Input`/`@Output`.
  - `funcionario-form/` — presentational form component; emits a new employee object via `@Output() funcionarioAdicionado` (`EventEmitter`) on submit. Not built with `ReactiveFormsModule`; uses two-way `[(ngModel)]` binding.
  - `funcionario-card/` — presentational display component; receives an employee via `@Input() funcionarioRecebido` and computes inline styles (`[ngStyle]`) from it.
- Styling mixes global CSS (`src/styles.css` + Bootstrap 4, both registered in `.angular-cli.json`'s `styles` array) with per-component `styleUrls`/inline `styles`.
- No state management library, no services/DI beyond Angular's defaults, no routing — this is intentionally minimal, tutorial-scale code. Don't introduce NgRx/services/routing unless the task actually calls for it.
