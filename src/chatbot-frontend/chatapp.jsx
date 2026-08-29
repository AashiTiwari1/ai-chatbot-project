import React, { useState, useRef, useEffect } from 'react';
import './ChatApp.css';

const BACKEND_URL = 'https://ai-chatbot-project-aye5.onrender.com/chat';

export default function ChatApp() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Heyyy! 👋 What's on your mind today?" },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    setMessages((prev) => [...prev, { sender: 'user', text: trimmed }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = await res.json();

      if (data.reply) {
        setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }]);
      } else {
        setMessages((prev) => [...prev, { sender: 'bot', text: "Oops, that didn't work. Try again?" }]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: "Can't reach the server — is the backend running?" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="page">
      <div className="chat-shell">
        <header className="chat-header">
          <div className="blob-avatar">
            <span className="blob-face">🤖</span>
          </div>
          <div className="header-text">
            <h1>ChatBuddy</h1>
            <p>your friendly AI pal</p>
          </div>
        </header>

        <div className="messages" role="log" aria-live="polite">
          {messages.map((msg, i) => (
            <div key={i} className={`row ${msg.sender === 'user' ? 'row-user' : 'row-bot'}`}>
              {msg.sender === 'bot' && <span className="mini-avatar">🤖</span>}
              <div className={`bubble ${msg.sender === 'user' ? 'bubble-user' : 'bubble-bot'}`}>
                {msg.text}
              </div>
              {msg.sender === 'user' && <span className="mini-avatar">🙂</span>}
            </div>
          ))}

          {loading && (
            <div className="row row-bot">
              <span className="mini-avatar">🤖</span>
              <div className="bubble bubble-bot typing">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
            </div>
          )}
          <div ref={scrollRef} />
        </div>

        <div className="input-bar">
          <textarea
            className="input-field"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type something fun..."
            rows={1}
          />
          <button
            className="send-btn"
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            aria-label="Send message"
          >
            🚀
          </button>
        </div>
      </div>
    </div>
  );
}
