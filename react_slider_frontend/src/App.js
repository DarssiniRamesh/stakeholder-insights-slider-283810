import React, { useEffect, useState } from 'react';
import './App.css';
import StakeholderSlider from './components/StakeholderSlider';

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
    <div className="App">
      <header className="App-header" style={{ background: 'var(--bg-primary)' }}>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>

        <div className="container" style={{ width: '100%', padding: '24px 0' }}>
          <h1 className="title" style={{ margin: '0 0 8px' }}>
            Flood Relief Stakeholders
          </h1>
          <p className="description" style={{ margin: '0 0 16px', color: 'var(--text-primary)', opacity: 0.8, fontSize: 16 }}>
            Explore the key groups enabling timely response and recovery.
          </p>

          <StakeholderSlider />
        </div>
      </header>
    </div>
  );
}

export default App;
