import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { GlobalSum } from '../../Contexts/GlobalSum';

import '../../Styles/global.css';

export const Navbar = () => {
  const globalSum = useContext(GlobalSum)

  return (
    <main className="navbar">
      <ul>
        <Link to="/" className="category-wrapper active">
          <span>Atributos</span>
          <span>- {globalSum.attSum}</span>
        </Link>
        <Link to="skills">
          <span>Perícias</span>
          <span>- 0 </span>
        </Link>
        <Link to="equipments">
          <span>Equipamentos</span>
        </Link>
      </ul>
    </main>
  );
};
