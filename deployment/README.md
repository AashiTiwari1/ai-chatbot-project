# Deployment

This folder documents how the AI chatbot is deployed and made publicly accessible.

## Live Links
- **Frontend (Vercel):** [add your Vercel URL here once live]
- **Backend (Render):** https://ai-chatbot-project-aye5.onrender.com

## Deployment Architecture
User's Browser
↓
Frontend hosted on Vercel (React/Vite)
↓
Backend hosted on Render (Node.js/Express)
↓
Google Gemini API (NLP + response generation)

## Backend Deployment (Render)
1. Repository connected to Render as a Web Service
2. **Root Directory:** `src/backend`
3. **Build Command:** `npm install`
4. **Start Command:** `node server.js`
5. Environment variable `GEMINI_API_KEY` set securely in Render's dashboard (not committed to the repo)

## Frontend Deployment (Vercel)
1. Repository connected to Vercel
2. **Root Directory:** `src/chatbot-frontend`
3. Framework preset: Vite (auto-detected)
4. `BACKEND_URL` in `ChatApp.jsx` updated to point to the deployed Render backend URL before deploying

## Environment Variables Required
| Variable | Where | Purpose |
|---|---|---|
| `GEMINI_API_KEY` | Render (backend) | Authenticates requests to the Google Gemini API |
| `PORT` | Render (backend) | Port the Express server runs on (Render sets this automatically) |

## Notes
- `.env` files are excluded from the repository via `.gitignore` for security — secrets are configured directly in each hosting platform's dashboard.
- The backend free tier on Render may spin down after inactivity; the first request after idle time can take up to ~30 seconds to respond.
