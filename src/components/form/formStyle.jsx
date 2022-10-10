import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: ${(props) =>
    `${
      props.isDark === false
        ? 'var(--color-dark-white)'
        : 'var(--color-light-black)'
    }`};
  border-radius: 20px;
  width: 100%;
  margin: 20px auto;
  padding: 40px 30px;
  transition: all var(--animation-duration) var(--theme-animation);
`;

export const FormBox = styled.form`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: var(--font-medium);
  font-weight: var(--weight-semi-bold);
  color: ${(props) =>
    `${props.isDark === false ? 'var(--color-black)' : 'var(--color-white)'}`};
  margin-right: 20px;
  transition: all var(--animation-duration) var(--theme-animation);
`;

export const Input = styled.input`
  max-width: 400px;
  width: 80%;
  margin-left: 20px;
  padding-left: 10px;
  border: none;
  border-radius: 30px;
  font-size: var(--font-medium);
  color: ${(props) =>
    `${props.isDark === false ? 'var(--color-black)' : 'var(--color-white)'}`};
  background-color: ${(props) =>
    `${props.isDark === false ? 'var(--color-white)' : 'var(--color-black)'}`};
  transition: all var(--animation-duration) var(--theme-animation);
`;

const StyledButton = styled.button`
  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);

  border: none;
  border-radius: 20px;

  padding: 4px 40px;
  background-color: var(--color-pink);

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background-color: var(--color-grey);
  }

  transition: all 100ms ease-in;
`;

export const Button = ({ disabled, children }) => {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
};

export const ToolTip = styled.span`
  display: inline-block;
  /* color: deeppink;
  font-weight: bold; */
`;

export const ToolTipText = styled.span`
  display: none;
  position: absolute;
  max-width: 200px;
  border: 1px solid;
  border-radius: 5px;
  padding: 5px;
  font-size: 0.8em;
  color: white;
  background: deeppink;
`;
