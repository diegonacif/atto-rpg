import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { GlobalSum } from '../../Contexts/GlobalSum';

import '../../Styles/global.css';

export const Navbar = () => {
  const globalSum = useContext(GlobalSum);

  const [isActive, setIsActive] = useState(1);
  const handleClick = index => {
    setIsActive(index);
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
          to="skills" 
          onClick={() => handleClick(2)}
          className={isActive === 2 ? 'category-wrapper active' : 'category-wrapper'}
        >
          <span>Perícias</span>
          <span>- 0 </span>
        </Link>
        <Link 
          to="equipments" 
          onClick={() => handleClick(3)}
          className={isActive === 3 ? 'category-wrapper active' : 'category-wrapper'}
        >
          <span>Equipamentos</span>
        </Link>
      </ul>
    </main>
  );
};
