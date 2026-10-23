# RE (: - Real Estate

A real estate discovery project built with React and Vite. Browse sample homes, explore neighborhoods, and learn about the developers behind each listing.

## Features

- Responsive React interface with pages for home, about, services, developers, neighborhoods, and properties
- Property and neighborhood detail pages
- Express API serving sample real estate data
- Swagger API documentation
- Tailwind CSS styling

## Getting started

### Requirements

- Node.js 20.19+ or 22.12+
- npm

### Install and run

```bash
npm install
```

Copy `.env.example` to `.env`, then start the API and web app together:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The Vite development server proxies API requests to the Express server on port `4000`.

On Windows PowerShell, copy the environment template with:

```powershell
Copy-Item .env.example .env
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the API and Vite development servers |
| `npm run dev:web` | Start only the Vite development server |
| `npm run dev:api` | Start only the Express API |
| `npm run build` | Build the frontend for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## API

The API serves sample data from `server/index.js`:

| Endpoint | Description |
| --- | --- |
| `GET /api/health` | API health check |
| `GET /api/developers` | List developers |
| `GET /api/zones` | List neighborhoods |
| `GET /api/zones/:id` | Get a neighborhood |
| `GET /api/units` | List properties |
| `GET /api/unit/:id` | Get a property |

With the API running, view the interactive Swagger UI at [http://localhost:4000/api-docs](http://localhost:4000/api-docs).

The sample API data is currently held in memory and resets when the server restarts. The API port can be changed with the `PORT` environment variable.

## Project structure

```text
components/   Shared layout and UI components
developers/   Developer pages
pages/        Main pages and property/neighborhood views
server/       Express API and OpenAPI specification
src/          React entry point, styles, and API helpers
```

## Environment

`.env.example` documents the optional API `PORT` setting. Local `.env` files are ignored by Git; do not commit credentials or other secrets.
