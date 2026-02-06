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
- **Data & styling:** Data is currently in-page or in constants (no backend). Styling is done with Tailwind and utility classes; tables use `@tanstack/react-table`, charts use ApexCharts.
- **Error handling:** `react-error-boundary` wraps the app and shows a fallback UI on errors.

---

## Assumptions

- **No backend:** All data is mock/static. No API calls or environment variables for services.
- **Modern browsers:** Target is recent, evergreen browsers that support ES modules and the used React/TS features.
- **Single user / no auth:** No login, roles, or permissions; the UI is built for a single user flow.
- **Routing:** Root `/` redirects to the main app route; all main views are client-side routes.
- **Details page entry:** From the Figma it was unclear where the details (Planning) page would open from, so it was assumed that it opens when clicking any of the cards in the **Progress Status** section on the Dashboard.
- **Node/npm:** Project is run and built with Node.js and npm; no other package managers or runtimes are assumed.

---

## What I would improve with more time

- **Backend & API:** Replace mock data with real APIs, add loading and error states, and consider React Query or SWR for data fetching and caching.
- **Testing:** Add unit tests (e.g. Vitest) for utilities and key components, and integration/E2E tests (e.g. Playwright) for critical flows.
- **Accessibility:** Audit with aXe or similar, improve keyboard navigation and screen reader support, and ensure focus management in modals and tables.
- **State management:** Introduce a global store (e.g. Zustand or Redux) if shared state grows beyond what props and local state can handle.
- **Performance:** Code-split by route, lazy-load heavy pages, and optimize chart and table rendering for large datasets.
- **UX polish:** Skeleton loaders, clearer empty states, toast notifications for actions, and optional dark mode.
- **DevOps:** Dockerfile and/or CI pipeline for build and deploy, plus basic health/readiness checks if a server is added later.
