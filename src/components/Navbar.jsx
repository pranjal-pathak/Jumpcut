import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const navLinks = [
    {
      name: 'Movies',
      path: '/',
    },
    {
      name: 'Watchlist',
      path: '/watchlist',
    },
  ];
  return (
    <div className="flex space-x-5 items-center justify-between  py-5 bg-[#d3d3d3] ">
      <div className='px-5'>
        <Link to="/">
          <img className="w-[50px]" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="flex gap-10 px-5">
        {navLinks.map((navLink) => (
          <Link key={navLink.name} className="text-blue-600  text-lg" to={navLink.path}>
            {navLink.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
