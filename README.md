# ARMY GROUP BILDI — Admin Panel

React + TypeScript admin console backed by Supabase Auth and PostgreSQL.

## Setup
1. Install Node.js 20+.
2. Run `npm install`.
3. Copy `.env.example` to `.env`.
4. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`.
5. Run `npm run dev`.

## Access
Sign in with a Supabase Auth account. The account must have an active row in `public.admin_roles`. Admin role assignment must only be done by a trusted privileged operator, never from the public browser.

## Security
The browser uses only the publishable key. PostgreSQL RLS must enforce admin permissions independently of the UI. Never put service-role or secret keys in frontend code.

## Current scope
Login, role gate, draft creation, list, publish and delete are implemented. Translation editing, Storage uploads, notification delivery, audit triggers, user management and reporting dashboards are follow-up modules.
