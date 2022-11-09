import { Link } from 'react-router-dom';

import '../../Styles/global.css';

export const Navbar = () => {
  return (
    <main className="navbar">
      <ul>
        <Link to="/" className="active">Atributos</Link>
        <Link to="skills">Perícias</Link>
        <Link to="equipments">Equipamentos</Link>
      </ul>
    </main>
  );
};
