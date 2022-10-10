import GlobalStyle from './globalStyle';
import React, { useState } from 'react';
import Router from './shared/router';
import { ThemeContext } from './contexts/themeContext';

function App() {
  /* 다크테마 구현 연습 state */
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <GlobalStyle isDark={isDark} />
      <Router />
    </ThemeContext.Provider>
  );
}

export default App;
