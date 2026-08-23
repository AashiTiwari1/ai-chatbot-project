# AI Chatbot — U2U Innovate Internship Project

## Project Title
AI Chatbot Development

## Description
This project is an AI-powered chatbot built as part of a 6-week internship under the U2U AI Team. The chatbot uses a modern NLP pipeline powered by Google's Gemini API to understand user messages and generate context-aware responses in real time. It features a custom-designed, interactive dark-themed chat interface built with React.

### Why this project is needed
Chatbots are widely used across industries to automate conversations, answer queries, and improve user engagement. This project demonstrates a practical, end-to-end implementation of chatbot architecture — from frontend UI to backend API to AI model integration — reflecting real-world patterns used in production chatbot systems.

## Objectives
- Understand chatbot architecture (frontend → backend → NLP/AI model)
- Implement an NLP pipeline using Google's Gemini API
- Build an interactive, responsive chat UI

## Tech Stack
- **Frontend:** React (Vite)
- **Backend:** Node.js, Express
- **AI Model / NLP:** Google Gemini API (gemini-3.6-flash)
- **Styling:** Custom CSS (dark theme, animated UI)

## Architecture
User (React UI)
↓
Node.js/Express backend (/chat endpoint)
↓
Google Gemini API (NLP + response generation)
↓
Response returned to React UI


## How to Run It
cd src/backend
npm install

Create a `.env` file in `src/backend` with:

Get a free API key at https://aistudio.google.com/apikey
Start the server:

node server.js


### Frontend

cd src/chatbot-frontend
npm install
npm run dev

Open the printed local URL (e.g. `http://localhost:5173`) in your browser.

## Folder Structure

u2u-internship-project/
├── README.md
├── data/ # datasets used/referenced (if any)
├── src/ # source code (frontend + backend)
├── reports/ # weekly reports and final report
└── deployment/ # deployment files and instructions


## Contributors
- Aashi — Developer

### Backend
