# Port Configuration

This document describes the fixed port configuration for the AI-Driven SOC Platform during local development and serves as the single source of truth for backend and frontend ports.

## Default Ports

- **Backend API:** `PORT 5000`
- **Frontend (Vite / React dev server):** `PORT 5173`

These ports are used consistently across the project to keep the development environment predictable and to avoid conflicts with other common services.

## Why These Ports Are Fixed

- **Backend on 5000**
  - 5000 is a commonly used port for backend APIs in development.
  - It is unlikely to conflict with core OS services.
  - Using a fixed backend port simplifies environment configuration, documentation, and integration with tools like Postman/Thunder Client.

- **Frontend on 5173**
  - 5173 is the default port used by Vite, which is a popular dev server/bundler for React.
  - Keeping the default Vite port makes the frontend configuration minimal and avoids extra setup.

By standardizing on these ports, scripts and documentation can assume a consistent local URL structure:

- Backend: `http://localhost:5000`
- Frontend: `http://localhost:5173`

## Troubleshooting EADDRINUSE (Port Already in Use)

If you see an error similar to:

```text
Error: listen EADDRINUSE: address already in use 0.0.0.0:5000
```

or

```text
Error: listen EADDRINUSE: address already in use 0.0.0.0:5173
```

it means another process is already using that port.

### Steps to Resolve on Windows (PowerShell)

1. **Identify the process using the port**

   ```powershell
   netstat -ano | findstr :5000
   netstat -ano | findstr :5173
   ```

   Look at the last column (PID) in the output.

2. **Find the application by PID**

   ```powershell
   tasklist | findstr <PID>
   ```

   Replace `<PID>` with the numeric PID you found from `netstat`.

3. **Close or kill the conflicting process**

   - First, try closing the application normally (for example, an old dev server window).
   - If necessary, you can force-kill it:

   ```powershell
   taskkill /PID <PID> /F
   ```

4. **Restart your backend or frontend server**

   Once the port is free, re-run your dev command (e.g., `npm run dev` for the frontend, or `npm start`/`node server.js` for the backend).

### Optionally Change Ports

If changing ports is necessary (for example, due to corporate network policies or conflicts with other services):

- **Backend**: Expose a `PORT` environment variable in your backend code and configure it via `.env` or the shell.
- **Frontend (Vite)**: You can override the dev server port in `vite.config`.

However, for this project, the default and recommended configuration is:

- Backend: `PORT=5000`
- Frontend dev server: `PORT=5173`
