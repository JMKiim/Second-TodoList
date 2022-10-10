import React, { useContext, useEffect, useState } from 'react';
import { FormContainer, FormBox, Button, Label, Input } from './formStyle';
import { addTodo } from '../../redux/modules/todo';
import { useDispatch } from 'react-redux';
import { ThemeContext } from '../../contexts/themeContext';

const Form = () => {
  const { isDark } = useContext(ThemeContext);
  const [name, setName] = useState('');
  const [dec, setDec] = useState('');
  const onNameChangeHandler = (event) => {
    const { value } = event.target;
    setName(value);
  };
  const onDecChangeHandler = (event) => {
    const { value } = event.target;
    setDec(value);
  };

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo({ name, dec }));
    setName('');
    setDec('');
  };

  /* 버튼의 활성화 여부 조작 */
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    if (name !== '' && dec !== '') setIsDisabled(false);
    else setIsDisabled(true);
    console.log(`name: ${name}, dec: ${dec}`);
  }, [name, dec]);

  return (
    <FormContainer isDark={isDark}>
      <FormBox onSubmit={onSubmit}>
        <Label isDark={isDark}>
          제목
          <Input
            isDark={isDark}
            placeholder='제목을 입력해주세요'
            type='text'
            value={name}
            onChange={onNameChangeHandler}
          />
        </Label>
        <Label isDark={isDark}>
          내용
          <Input
            isDark={isDark}
            placeholder='내용을 입력해주세요'
            type='text'
            value={dec}
            onChange={onDecChangeHandler}
          />
        </Label>
        <Button disabled={isDisabled}>추가하기</Button>
      </FormBox>
    </FormContainer>
  );
};

export default Form;
