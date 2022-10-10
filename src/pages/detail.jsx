import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/layout';
import {
  DetailBody,
  DetailBox,
  DetailLink,
  DetailNav,
} from '../components/todo/todoStyle';

const Detail = () => {
  const globalTodos = useSelector((state) => state.todo.todos);
  const param = useParams();
  const todo = globalTodos.find((item) => item.id === +param.id);
  return (
    <Layout>
      <DetailBody>
        <DetailBox>
          <DetailNav>
            <h2>ID : {todo.id}</h2>
            <DetailLink to='/'>
              <p>이전으로</p>
            </DetailLink>
          </DetailNav>
          <h1>{todo.name}</h1>
          <p>{todo.dec}</p>
        </DetailBox>
      </DetailBody>
    </Layout>
  );
};

export default Detail;
