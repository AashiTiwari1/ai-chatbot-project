# Weekly Progress Reports

## Week 1
**Tasks Completed**
- Reviewed project requirements: build an AI chatbot using NLP and modern frameworks (React, Node.js)
- Set up development environment (Node.js, npm, Git, VS Code)
- Planned chatbot architecture: React frontend → Node.js/Express backend → AI model (NLP)

**Challenges Faced**
- Initial environment setup issues (Node.js/npm not recognized, PowerShell script execution disabled) — resolved by reinstalling Node.js correctly and updating PowerShell execution policy

**Plan for Next Week**
- Build backend API and integrate an NLP/AI model for generating responses

---

## Week 2
**Tasks Completed**
- Built Express backend with a `/chat` endpoint
- Integrated Google Gemini API (free tier) for NLP and response generation
- Tested backend locally and confirmed it correctly returns AI-generated responses

**Challenges Faced**
- Initial model name (`gemini-2.5-flash`) was deprecated; updated to `gemini-3.6-flash` after debugging a 404 error from the API

**Plan for Next Week**
- Build the React frontend chat interface and connect it to the backend

---

## Week 3
**Tasks Completed**
- Built the React (Vite) frontend chat interface
- Connected frontend to backend via fetch API calls
- Implemented conversation state, typing indicator, and auto-scroll

**Challenges Faced**
- Debugging connection issues between frontend and backend during local testing

**Plan for Next Week**
- Improve UI/UX design and add polish to the chat interface

---

## Week 4
**Tasks Completed**
- Redesigned the chat interface with a custom, distinctive visual theme (colorful, playful design with animations)
- Added responsive styling and improved accessibility (ARIA labels, semantic roles)

**Challenges Faced**
- None significant — this week focused on refinement

**Plan for Next Week**
- Organize project structure for submission and set up GitHub repository

---

## Week 5
**Tasks Completed**
- Structured the project according to submission guidelines (`data/`, `src/`, `reports/`, `deployment/` folders)
- Wrote documentation (README files) for the root project and each subfolder
- Prepared test data and documented the data cleaning and storage process
- Set up Git and pushed the project to GitHub

**Challenges Faced**
- Various Git/GitHub setup issues (installing Git, branch mismatches, secret scanning blocking a push due to an exposed API key) — resolved by removing the key from tracking and using environment variables instead

**Plan for Next Week**
- Deploy the chatbot so it is publicly accessible

---

## Week 6
**Tasks Completed**
- Deployed the backend to Render (Node.js/Express + Gemini API)
- Deployed the frontend to GitHub Pages
- Tested the fully deployed chatbot end-to-end
- Finalized documentation and reports

**Challenges Faced**
- Frontend build errors on Vercel due to incorrect file paths/casing — resolved by switching to GitHub Pages and carefully rebuilding the folder structure
- Understood and documented the "cold start" delay on Render's free tier

**Plan for Next Week**
- Project complete — ready for final submission and demonstration
