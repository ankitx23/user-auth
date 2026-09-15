# User Auth

A React auth flow backed by Supabase: signup, login, logout, and password reset, with `react-router-dom` handling the routes.

## Pages

- `Signup.js` / `Login.js` — email/password signup and sign-in
- `ResetPassword.js` — password reset flow
- `Dashboard.js` — the page you land on once you're signed in
- `Home.js` — landing page
- `authService.js` — thin wrapper around the Supabase auth calls used by the pages above

## Running it

```bash
npm install
npm start
```

Opens on [http://localhost:3000](http://localhost:3000).

## Setup

`src/supabaseClient.js` currently has the Supabase project URL and anon key inline. The anon key is meant to be public (it's the client-side key, gated by Supabase's row-level security), but if you're forking this for your own project, swap in your own project's URL/key — or better, move both into environment variables (`REACT_APP_SUPABASE_URL`, `REACT_APP_SUPABASE_ANON_KEY`) and read them via `process.env`.
