import React, { useEffect, useState } from 'react';
import './App.css';
import StakeholderSliderPage from './pages/StakeholderSliderPage';
import TechStackPage from './pages/TechStackPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <BrowserRouter>
      <div className="App" style={{ background: 'var(--bg-canvas, #FFFFFF)' }}>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>

        {/* Minimal top nav (non-intrusive) */}
        <nav style={{ position: 'absolute', top: 20, left: 20 }}>
          <Link to="/" style={{ marginRight: 12 }}>Home</Link>
          <Link to="/tech-stack">Tech Stack</Link>
        </nav>

        <Routes>
          <Route path="/" element={<StakeholderSliderPage />} />
          <Route path="/tech-stack" element={<TechStackPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
