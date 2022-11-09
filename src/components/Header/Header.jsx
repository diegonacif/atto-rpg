import { useContext } from 'react';
import { GlobalSum } from '../../Contexts/GlobalSum';

import '../../Styles/global.css';

export const Header = () => {
  const globalSum = useContext(GlobalSum)
  return (
    <main className="header">
      <div className="names-wrapper">
        <span>Jogador:</span>
        <input type="text" />
      </div>
      <div className="names-wrapper">
        <span>PDJ:</span>
        <input type="text" />
      </div>
      <div className="xp-wrapper">
        <span>XP: {globalSum.sum}</span>
      </div>
    </main>
  );
};