import React, { useContext } from 'react';
import { HeaderContainer, HeaderContent, ThemeBtn } from './headerStyle';
import { ThemeContext } from '../../contexts/themeContext';

const Header = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const btnClass = isDark === false ? 'Light 🌞 Theme' : 'Dark 🌙 Theme';

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <HeaderContainer isDark={isDark}>
      <HeaderContent isDark={isDark}>My Todo List</HeaderContent>
      <ThemeBtn isDark={isDark} onClick={toggleTheme}>
        {btnClass}
      </ThemeBtn>
      <HeaderContent isDark={isDark}>React</HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
