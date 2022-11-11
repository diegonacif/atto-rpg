import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { GlobalSum } from '../../Contexts/GlobalSum';

import '../../Styles/global.css';

export const Navbar = () => {
  const globalSum = useContext(GlobalSum);

  const isActive = globalSum.navActive;
  const setNavActive = globalSum.setNavActive;

  const handleClick = index => {
    setNavActive(index);
  };

  return (
    <main className="navbar">
      <ul>
        <Link 
          to="/" 
          onClick={() => handleClick(1)}
          className={isActive === 1 ? 'category-wrapper active' : 'category-wrapper'}
        >
          <span>Atributos</span>
          <span>- {globalSum.attSum}</span>
        </Link>
        <Link 
          to="/skills" 
          onClick={() => handleClick(2)}
          className={isActive === 2 ? 'category-wrapper active' : 'category-wrapper'}
        >
          <span>Perícias</span>
          <span>- {globalSum.skillSum}</span>
        </Link>
        <Link 
          to="/equipments" 
          onClick={() => handleClick(3)}
          className={isActive === 3 ? 'category-wrapper active' : 'category-wrapper'}
        >
          <span>Equipamentos</span>
        </Link>
      </ul>
    </main>
  );
};
