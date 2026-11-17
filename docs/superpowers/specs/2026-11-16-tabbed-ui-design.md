# Tabbed UI (Employee Dashboard, Mini Dashboard, Profile Card) — Design

## Intent
Course assignment: recreate three Figma screens in React + TypeScript + Tailwind, switchable via tabs. Graded on matching the designs and meeting the requirements (reusable components with props, Flexbox/Grid, custom theme, responsive, working tab navigation).

## Goals
- Vite + React 19 + TS app with Tailwind v4 (`tailwindcss`, `@tailwindcss/vite`), theme in `src/index.css` via `@theme`.
- Three pages matching screenshots as closely as reasonable.
- Reusable prop-driven components shared across pages.
- Responsive: sidebar collapses on small screens, grids/tables adapt.

## Non-goals / anti-goals
- No router, no backend, no state library, no tests beyond type-check/lint/build.
- Don't hardcode colors/spacing inline when a theme token exists.

## Approach (picked: option 1)
Tabs are React state (`activeTab`) in `App`, rendered by a top `TabBar`. Rejected: React Router (extra dependency, not required); self-contained pages (duplication, violates reusability). Optional later: sync tab to `location.hash`.

## Structure
- `src/App.tsx` — tab state + TabBar + page switch
- `src/components/` — `TabBar`, `Button` (primary / accent / outline variants), `Card`, `Avatar` (initials, color prop), `StatusBadge` (green/amber/blue/gray), `StatCard` (label, value, optional icon + subtext), `PageHeader`
- `src/pages/` — `EmployeeDashboard` (sidebar, topbar, stat grid, team table, activity feed), `MiniDashboard`, `ProfileCard`
- Data (employees, projects, activity) as typed arrays in each page file or `src/data/`.

## Theme (from screenshots; refined while building)
- Primary navy `#234e70` (stated in Profile Card footer); dark sidebar navy; teal accent for "+ Add employee"; light gray-blue page background; white cards.
- Status colors: green (Active/Available/Completed), amber (On Leave/Pending), blue (In Progress), gray (Planning).
- Font: Inter (my call; looks like Inter in the designs). Radii/shadows tokenized.

## Calls made by me (not the user)
Inter font; Tailwind v4 `@theme` over config file; tab state without URL sync; exact hex values sampled by eye from screenshots except `#234e70`.

## Left to the builder
Exact spacing/sizes, icon choices (inline SVG, no icon library unless needed), breakpoints, mobile sidebar behavior.
