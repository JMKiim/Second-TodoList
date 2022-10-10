import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TodoBox = styled.div`
  width: 410px;
  border: 5px solid var(--color-dark-blue);
  border-radius: 20px;
  padding: 10px 30px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const TodoLink = styled(Link)`
  text-decoration: none;
  font-size: var(--font-regular);

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const ButtonSet = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

export const DelButton = styled.button`
  border: 3px solid red;
  border-radius: 20px;
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
  color: ${(props) =>
    `${props.isDark === false ? 'var(--color-black)' : 'var(--color-white)'}`};
  width: 140px;
  height: 50px;
  transition: all var(--animation-duration) var(--theme-animation);
`;
export const DoneButton = styled.button`
  border: 3px solid green;
  border-radius: 20px;
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
  color: ${(props) =>
    `${props.isDark === false ? 'var(--color-black)' : 'var(--color-white)'}`};
  width: 140px;
  height: 50px;
  transition: all var(--animation-duration) var(--theme-animation);
`;

/* Todo Detail */
export const DetailBody = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DetailBox = styled.section`
  border: 2px solid var(--color-dark-white);
  width: 700px;
  height: 400px;
  padding: 0 30px;
`;

export const DetailNav = styled.nav`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;
  margin-bottom: 30px;
`;

export const DetailLink = styled(Link)`
  text-decoration: none;
  font-size: var(--font-regular);
  color: black;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  border: 2px solid var(--color-dark-white);
  border-radius: 20px;
  padding: 10px 40px;
`;
