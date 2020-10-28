import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <h1 className='LogoText'><Link to={'/'}>News</Link></h1>
    </div>
  );
};

export default Navbar;