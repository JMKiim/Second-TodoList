import { TodosContainer, TodosUL } from './todoListStyle';
import React from 'react';
import { useSelector } from 'react-redux';
import Todo from '../todo/todo';

const TodoList = () => {
  const globalTodos = useSelector((state) => state.todo.todos);

  return (
    <TodosContainer>
      <h1>Working.. 🔥</h1>
      <TodosUL>
        {globalTodos
          .filter((todo) => todo.isDone === false)
          .map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
      </TodosUL>

      <h1>Done..! 🎉</h1>
      <TodosUL>
        {globalTodos
          .filter((todo) => todo.isDone === true)
          .map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
      </TodosUL>
    </TodosContainer>
  );
};

export default TodoList;
