import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Global */

  :root {
    /* Color */
    --color-white: #ffffff;
    --color-light-white: #eeeeee;
    --color-dark-white: #bdbdbd;
    --color-pink: #fe918d;
    --color-dark-pink: #ff6863;
    --color-dark-grey: #4d4d4d;
    --color-grey: #616161;
    --color-light-grey: #7c7979;
    --color-blue: #73aace;
    --color-sky-blue: #bbeeff;
    --color-dark-blue: #3b9cff;
    --color-dark-purple: #493a98;
    --color-yellow: #fff7d1;
    --color-orange: #feb546;
    --color-dark-orange: #f7ae34;
    --color-black: #000000;
    --color-light-black: #181818;

    /* Font size */
    --font-large: 48px;
    --font-medium: 28px;
    --font-regular: 18px;
    --font-small: 16px;
    --font-micro: 14px;

    /* Font weight */
    --weight-bold: 700;
    --weight-semi-bold: 600;
    --weight-regular: 400;

    /* Animation Duration */
    --animation-duration: 500ms;
    --theme-animation: ease-out;
  }

  /* Universal tags */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body { 
    display: flex;
    justify-content: center;
    background-color: ${(props) =>
      `${
        props.isDark === false ? 'var(--color-white)' : 'var(--color-black)'
      }`};
    transition: all var(--animation-duration) var(--theme-animation);
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
  }

  /* Typography */
  h1 {
    font-size: var(--font-large);
    font-weight: var(--weight-bold);
    color: ${(props) =>
      `${
        props.isDark === false ? 'var(--color-black)' : 'var(--color-white)'
      }`};
    margin: 16px 0px;
    transition: all var(--animation-duration) var(--theme-animation);
  }

  h2 {
    font-size: var(--font-medium);
    font-weight: var(--weight-semi-bold);
    color: ${(props) =>
      `${
        props.isDark === false ? 'var(--color-black)' : 'var(--color-white)'
      }`};
    margin: 8px 0;
    transition: all var(--animation-duration) var(--theme-animation);
  }

  h3 {
    font-size: var(--font-regular);
    font-weight: var(--weight-regular);
    color: ${(props) =>
      `${
        props.isDark === false ? 'var(--color-black)' : 'var(--color-white)'
      }`};
    margin: 8px 0;
    transition: all var(--animation-duration) var(--theme-animation);
  }

  p {
    font-size: var(--font-regular);
    font-weight: var(--weight-regular);
    color: ${(props) =>
      `${
        props.isDark === false ? 'var(--color-black)' : 'var(--color-white)'
      }`};
    margin: 4px 0;
    transition: all var(--animation-duration) var(--theme-animation);
  }
`;

export default GlobalStyle;
