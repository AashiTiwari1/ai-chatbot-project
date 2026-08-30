# Final Report — AI Chatbot Development

## 1. Project Overview
This project was developed as part of a 6-week internship under the U2U AI Team. The objective was to build an AI-powered chatbot using modern web frameworks and a natural language processing (NLP) pipeline, covering the full development lifecycle: architecture design, backend and frontend implementation, testing, documentation, and deployment.

## 2. Objectives
- Understand chatbot architecture
- Implement an NLP pipeline
- Build an interactive, responsive UI

All three objectives were achieved (see sections below).

## 3. Tech Stack
- **Frontend:** React (Vite)
- **Backend:** Node.js, Express
- **AI Model / NLP:** Google Gemini API (`gemini-3.6-flash`)
- **Version Control:** Git & GitHub
- **Deployment:** Render (backend), GitHub Pages (frontend)

## 4. System Architecture
User (Browser)
↓
React Frontend (Vite) — hosted on GitHub Pages
↓ (HTTPS fetch request)
Node.js/Express Backend — hosted on Render
↓
Google Gemini API (NLP + response generation)
↓
Response returned to Frontend → displayed to User
## 5. NLP Pipeline
Rather than building a rule-based or from-scratch NLP system, this project uses the Google Gemini API as the NLP engine. The backend maintains conversation history and sends it, along with a system prompt, to the Gemini API. This gives the chatbot:
- Intent understanding (interpreting varied phrasing of user messages)
- Context-aware responses (remembers earlier turns in the conversation)
- Natural, coherent response generation

This approach reflects a common real-world pattern: using a hosted large language model as the NLP layer rather than building custom NLP models for a project of this scope and timeline.

## 6. UI/UX Design
The chat interface was custom-designed (not using a default template) with:
- A distinctive colorful, playful visual theme with a custom color palette and typography
- Bounce/pop-in animations for messages and a typing indicator
- Responsive layout for different screen sizes
- Accessible markup (ARIA roles/labels for screen readers)

## 7. Testing
Testing was conducted using a small set of sample conversation inputs (see `data/` folder) covering:
- Standard greetings and questions
- Informal/shorthand phrasing
- Edge cases (empty input, invalid input)

A data cleaning process was documented to demonstrate handling of inconsistent/noisy test input formatting (see `data/data_cleaning_report.md`).

## 8. Deployment
- **Backend:** Deployed to Render as a Node.js Web Service, with the Gemini API key stored securely as an environment variable (never committed to source control)
- **Frontend:** Deployed to GitHub Pages as a static build, configured with the correct base path for the repository

See `deployment/README.md` for full deployment architecture and steps.

## 9. Challenges and Learnings
- **Environment setup:** Resolved Node.js/npm installation and PowerShell execution policy issues
- **API model deprecation:** Adapted quickly when the initial Gemini model version was deprecated mid-project, switching to the recommended replacement
- **Git/GitHub workflow:** Learned Git fundamentals (init, add, commit, push, branches, merge) through hands-on troubleshooting, including resolving a GitHub secret-scanning block caused by an exposed API key
- **Deployment debugging:** Diagnosed and fixed build failures caused by incorrect file paths and casing mismatches between Windows (case-insensitive) and Linux-based build servers (case-sensitive)
- **Free-tier hosting trade-offs:** Understood and documented the "cold start" delay inherent to free-tier backend hosting (Render)

## 10. Conclusion
This project successfully delivers a fully functional, deployed AI chatbot that meets all three internship objectives. Beyond the core chatbot implementation, the project involved substantial real-world software engineering practice: environment configuration, version control, debugging build pipelines, and cloud deployment — skills directly applicable to professional software development work.

## 11. Links
- **GitHub Repository:** https://github.com/AashiTiwari1/ai-chatbot-project
- **Live Demo (Frontend):** https://aashitiwari1.github.io/ai-chatbot-project/
- **Backend API:** https://ai-chatbot-project-aye5.onrender.com
Google Gemini API (NLP + response generation)
↓
Response returned to Frontend → displayed to User
