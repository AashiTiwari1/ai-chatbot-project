require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = 'gemini-3.6-flash';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

let conversationHistory = [];

app.post('/chat', async (req, res) => {
  try {
    const userMessage = req.body.message;
    if (!userMessage || userMessage.trim() === '') {
      return res.status(400).json({ error: 'Message cannot be empty' });
    }

    conversationHistory.push({ role: 'user', parts: [{ text: userMessage }] });

    const response = await axios.post(GEMINI_URL, {
      contents: conversationHistory,
      systemInstruction: {
        parts: [{ text: 'You are a helpful, friendly chatbot assistant. Keep answers concise and clear.' }],
      },
      generationConfig: { maxOutputTokens: 500 },
    });

    const botReply = response.data.candidates[0].content.parts[0].text;
    conversationHistory.push({ role: 'model', parts: [{ text: botReply }] });

    if (conversationHistory.length > 20) {
      conversationHistory = conversationHistory.slice(-20);
    }

    res.json({ reply: botReply });
  } catch (error) {
    console.error('Error talking to Gemini API:', error.response?.data || error.message);
    res.status(500).json({ error: 'Something went wrong talking to the AI model.' });
  }
});

app.post('/reset', (req, res) => {
  conversationHistory = [];
  res.json({ status: 'conversation reset' });
});

app.get('/', (req, res) => {
  res.send('Chatbot backend is running.');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
