import { useContext } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import '../../Styles/global.css';
import { PointsButton } from '../PointsButton/PointsButton';

export const Header = () => {
  const [player, setPlayer] = useLocalStorage("player_name", "");
  const [character, setCharacter] = useLocalStorage("character_name", "");

  return (
    <main className="header">
      <div className="names-wrapper">
        <span>Jogador:</span>
        <input 
          type="text"
          placeholder="seu nome"
          value={player}
          onChange={(e) => setPlayer(e.target.value)}
        />
      </div>
      <div className="names-wrapper">
        <span>Personagem:</span>
        <input 
          type="text" 
          placeholder="nome do boneco"
          value={character}
          onChange={(e) => setCharacter(e.target.value)}
        />
      </div>
      <PointsButton />
    </main>
  );
};