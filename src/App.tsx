import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

function App() {

   const { theme, toggleTheme } = useContext(ThemeContext);

  return (
     <div>
      <div>Hi friend!</div>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </div>
  );
}

export default App;
