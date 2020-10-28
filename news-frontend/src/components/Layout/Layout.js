import React from 'react';
import Navbar from '../Navigation/Navbar';

const Layout = props => {
  return (
    <>
      <Navbar />
      <main className='main'>
        {props.children}
      </main>
    </>
  );
};

export default Layout;