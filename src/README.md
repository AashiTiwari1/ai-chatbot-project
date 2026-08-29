# Source Code

This folder contains the full source code for the AI chatbot project.

## Structure
- `backend/` — Node.js/Express server that connects to the Google Gemini API for NLP and response generation
- `chatbot-frontend/` — React (Vite) frontend for the interactive chat interface

## Setup

### Backend
cd backend
npm install
Create a `.env` file inside `backend/` with:
Get a free key at https://aistudio.google.com/apikey

Run:
node server.js

### Frontend
cd chatbot-frontend
npm install
npm run dev
Open the local URL printed in the terminal (e.g. `http://localhost:5173`).

**Note:** `node_modules/` and `.env` are not included in this repo — run `npm install` and create your own `.env` file before running the project.
