import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${(props) =>
    `${props.isDark === false ? 'var(--color-white)' : 'var(--color-black)'}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;

  border: 1px solid var(--color-light-grey);
  transition: all var(--animation-duration) var(--theme-animation);
`;

export const HeaderContent = styled.span`
  margin: 10px 30px;
  color: ${(props) =>
    `${props.isDark === false ? 'var(--color-black)' : 'var(--color-white)'}`};
  transition: all var(--animation-duration) var(--theme-animation);
`;

export const ThemeBtn = styled.button`
  font-size: var(--font-medium);
  color: ${(props) =>
    `${props.isDark === false ? 'var(--color-black)' : 'var(--color-white)'}`};
  transition: all var(--animation-duration) var(--theme-animation);
`;
