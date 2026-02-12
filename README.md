# AI-Driven SOC Platform

An AI-driven Security Operations Center (SOC) platform designed to help security teams detect, investigate, and respond to security incidents using modern web technologies and AI-assisted analysis.

## Features

- Centralized incident management dashboard
- Rule-based and AI-assisted incident detection
- Incident triage and prioritization
- Search and filter across historical incidents
- Integration-ready backend API for alerts and events
- Lightweight SQLite storage for local development
- Frontend UI for analysts with real-time updates (planned)

## Tech Stack

- **Backend:** Node.js (Express or similar)
- **Frontend:** React (Vite-based dev server)
- **AI:** Gemini API integration for enrichment and analysis
- **Database:** SQLite for local development and prototyping

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/roopganesh21/AI-SOC-Platform.git
   cd AI-SOC-Platform
   ```

2. **Install dependencies** (will be set up in later phases)

   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd ../frontend
   npm install
   ```

3. **Environment variables**

   Create a `.env` file where needed (e.g., backend) with values such as:

   ```bash
   GEMINI_API_KEY=your_gemini_api_key_here
   NODE_ENV=development
   ```

## Usage

Detailed usage (running backend and frontend together) will be added in later phases. At a high level:

- Start the backend API server (e.g., on port 5000)
- Start the frontend dev server (e.g., on port 5173)
- Access the SOC dashboard via the frontend in the browser

## Project Structure

```text
AI-SOC-Platform/
├─ backend/        # Node.js backend (API, business logic)
├─ frontend/       # React frontend (analyst UI)
├─ docs/           # Project documentation and design notes
├─ tests/          # Automated tests (backend/frontend)
├─ README.md       # Project overview and setup
└─ .gitignore      # Git ignore rules
```

## License

This project is licensed under the MIT License. See the LICENSE file (if present) for details.
