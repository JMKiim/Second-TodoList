import React from 'react';
import Header from '../header/header';
import styled from 'styled-components';

const LayoutBody = styled.div`
  max-width: 1400px;
  width: 80vw;
`;

const Layout = (props) => {
  //console.log(props.children);
  return (
    <LayoutBody>
      <Header />
      <main>{props.children}</main>
    </LayoutBody>
  );
};

export default Layout;
