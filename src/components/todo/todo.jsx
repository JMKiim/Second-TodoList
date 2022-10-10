import React, { memo, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { delTodo, doneTodo } from '../../redux/modules/todo';
import {
  TodoBox,
  TodoLink,
  ButtonSet,
  DelButton,
  DoneButton,
} from './todoStyle';
import { ThemeContext } from '../../contexts/themeContext';

const Todo = memo((props) => {
  const { isDark } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const btnText = props.todo.isDone === true ? '취소!' : '완료!';

  const handleDelete = () => {
    dispatch(delTodo(props.todo.id));
  };
  const handleDone = () => {
    dispatch(doneTodo(props.todo.id));
  };

  const url = `/${props.todo.id}`;
  return (
    <li>
      <TodoBox>
        <TodoLink to={url}>상세보기</TodoLink>
        <h2>{props.todo.name}</h2>
        <p>{props.todo.dec}</p>
        <ButtonSet>
          <DelButton isDark={isDark} onClick={handleDelete}>
            삭제하기
          </DelButton>
          <DoneButton isDark={isDark} onClick={handleDone}>
            {btnText}
          </DoneButton>
        </ButtonSet>
      </TodoBox>
    </li>
  );
});

export default Todo;
