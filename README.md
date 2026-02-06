# Tahwul

A React-based compliance and planning dashboard built with TypeScript and Vite.

---

## How to run the project

**Prerequisites:** Node.js (v18+ recommended) and npm.

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (or the port shown in the terminal).

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview the production build**
   ```bash
   npm run preview
   ```

5. **Lint**
   ```bash
   npm run lint
   npm run lint:fix   # auto-fix where possible
   ```

---

## How the code was built

- **Stack:** React 19, TypeScript, Vite 7, Tailwind CSS 4, React Router 7.
- **Structure:** The app uses a single layout (sidebar + top bar) wrapping all pages. Routes are defined in `src/routes/` and rendered via `AppRoutes` with a shared `Layout`.
- **Pages:**  
  - **Dashboard:** Overview with metric cards, compliance/audit scores, progress, timeline, and recent activities.  
  - **Planning:** Planning view with overview, evidence table, comments, and circular progress.
- **Components:** Reusable UI is split into small components (e.g. `Card`, `DataTable`, `ComplianceScoreChart`, `Input`, `Dot`) under `src/components/`, with page-specific pieces under each page’s `components/` folder.
- **Data & styling:** Data is currently in-page or in constants. Styling is done with Tailwind and utility classes; tables use `@tanstack/react-table`, charts use ApexCharts.
- **Error handling:** `react-error-boundary` wraps the app and shows a fallback UI on errors.

---

## Assumptions

- **Dashboard route:** The Figma second screen has the dashboard selected, so it is treated as a route within the dashboard. The **Progress Status** cards are linked to that route—you can click on a card to view the Planning (details) page.

---

## What I would improve with more time

- **Responsiveness:** Improve layout and UX for smaller screens; current focus was on desktop with limited time and limited design resource for mobile/tablet.
- **Tailwind theme config:** Introduce a proper Tailwind theme configuration (e.g. design tokens, extended theme) for larger apps to improve codebase management and consistency.
- **Charts:** Align charts more closely with the designs for better accuracy (spacing, colors, labels, proportions).
- **State management:** Add a state management tool (e.g. Redux or Zustand) once we reach the integration stage for API data and shared app state.
- **Testing:** Add unit tests (e.g. Vitest) for utilities and key components, and integration/E2E tests (e.g. Playwright) for critical flows.
- **Accessibility:** Audit with aXe or similar, improve keyboard navigation and screen reader support, and ensure focus management in modals and tables.
- **Performance:** Code-split by route, lazy-load heavy pages, and optimize chart and table rendering for large datasets.
- **UX polish:** Skeleton loaders, clearer empty states, toast notifications for actions, and optional dark mode.
