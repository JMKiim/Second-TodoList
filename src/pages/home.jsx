import React from 'react';
import Layout from '../components/layout/layout';
import TodoList from '../components/todoList/todoList';
import Form from '../components/form/form';

const Home = () => {
  return (
    <Layout>
      <Form />
      <TodoList />
    </Layout>
  );
};

export default Home;
