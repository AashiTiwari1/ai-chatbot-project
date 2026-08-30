# Deployment

This folder documents how the AI chatbot is deployed and made publicly accessible.

## Live Links
- **Frontend (GitHub Pages):** https://aashitiwari1.github.io/ai-chatbot-project/
- **Backend (Render):** https://ai-chatbot-project-aye5.onrender.com

## Deployment Architecture
User's Browser
↓
Frontend hosted on GitHub Pages (React/Vite static build)
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

## Frontend Deployment (GitHub Pages)
1. `vite.config.js` configured with `base: '/ai-chatbot-project/'` to match the GitHub Pages subpath
2. `package.json` updated with a `homepage` field and `gh-pages` deploy script
3. Project built locally using `npm run build`, producing a `dist/` folder
4. Contents of `dist/` (`index.html` and `assets/`) published to the `gh-pages` branch
5. GitHub Pages configured (Settings → Pages) to serve from the `gh-pages` branch, root folder

## Environment Variables Required
| Variable | Where | Purpose |
|---|---|---|
| `GEMINI_API_KEY` | Render (backend) | Authenticates requests to the Google Gemini API |
| `PORT` | Render (backend) | Port the Express server runs on (Render sets this automatically) |

## Known Limitations
- The backend runs on Render's free tier, which spins down after ~15 minutes of inactivity. The first request after idle time can take 20-50 seconds to respond ("cold start") while the server wakes up. Subsequent requests respond normally.
- `.env` files are excluded from the repository via `.gitignore` — secrets are configured directly in Render's dashboard, not committed to source control.
