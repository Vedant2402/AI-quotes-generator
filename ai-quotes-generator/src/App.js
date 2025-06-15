// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';
import Button from './components/Button';
import { fetchQuote } from './api/fetchQuote';

function App() {
  const [quoteData, setQuoteData] = useState({ content: '', author: '' });
  const [loading, setLoading] = useState(false);

  const getNewQuote = async () => {
    setLoading(true);
    try {
      const data = await fetchQuote();
      setQuoteData({ content: data.content, author: data.author });
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuoteData({ content: "Oops! Couldn't fetch a quote.", author: "AI Bot" });
    }
    setLoading(false);
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  return (
    <div className="app">
      <h1>AI Quotes Generator</h1>
      <QuoteBox quote={quoteData.content} author={quoteData.author} />
      <Button onClick={getNewQuote} text={loading ? "Generating..." : "Generate New Quote"} />
    </div>
  );
}

export default App;
