# Kormopulse

Kormopulse is a full-stack recruitment platform for connecting job seekers with employers. It includes authentication, role-specific onboarding, job posting and search, applications, saved jobs, company profiles, dashboards, messaging, Cloudinary uploads, and Groq-assisted job-description tools.

## Project structure

```
Kormopulse/
├── frontend/     # React + Vite client
└── backend/      # Express + MongoDB API
```

## Run locally

Prerequisites: Node.js 18+. MongoDB is recommended for full login, profile, jobs, and application workflows, but the API can start in demo mode without MongoDB.

1. Copy `backend/.env.example` to `backend/.env` and provide the required values. For a local database, the example `MONGODB_URL` works as-is.
2. Install both apps:

   ```bash
   npm run install:all
   ```

3. In one terminal start the API:

   ```bash
   npm run dev:backend
   ```

4. In a second terminal start the client:

   ```bash
   npm run dev:frontend
   ```

Open the URL Vite prints (normally `http://localhost:5173`). The API health check is available at `http://localhost:8000/api/health`.

## Demo without MongoDB

If MongoDB is not ready yet, start the backend anyway:

```bash
npm run dev:backend
```

The server will run in demo mode. Use these URLs for quick progress checks:

- `http://localhost:8000/api/health`
- `http://localhost:8000/api/demo/overview`
- `http://localhost:5173`

Database-backed routes still need MongoDB before real auth, jobs, applications, and messages work end to end.

## Configuration

| File | Purpose |
| --- | --- |
| `backend/.env` | MongoDB, JWT, Cloudinary, Groq, port, and permitted frontend origins |
| `frontend/.env` | Optional `VITE_API_URL` override; defaults to `http://localhost:8000/api` |

## Team delivery milestones

See [COMMIT_PLAN.md](COMMIT_PLAN.md) for focused commits that can be pushed as the team completes each milestone.

## Next progress commits

These small commits were added after the first working copy:

1. `feat(api): add no-database demo overview`
2. `feat(ui): show project progress on home page`
3. `docs: document demo-mode progress checks`
