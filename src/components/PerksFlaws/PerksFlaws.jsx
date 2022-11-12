import { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { ArrowsClockwise } from 'phosphor-react';

import '../../Styles/global.css';

export const PerksFlaws = () => {
  const [side, setSide] = useState(true);
  function handleSide() {
    setSide(!side)
  }

  return (
    <div className="perks-flaws-container">
      <div className="navbar-container">
        <Navbar />
      </div>
      {
        side ?
        <section className="perks-wrapper">
          <div 
            className="section-title" 
            onClick={() => handleSide()}
          >
            <h2>Vantagens</h2>
            <ArrowsClockwise 
              size={28} 
              color="#241f31" 
              weight="bold"
              
            />
          </div>
          <h3>Nome</h3>
          <h3>Custo</h3>
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
        </section>
        :
        <section className="flaws-wrapper">
          <div 
            className="section-title"
            onClick={() => handleSide()}
          >
            <h2>Desvantagens</h2>
            <ArrowsClockwise 
              size={28} 
              color="#241f31" 
              weight="bold"
              
            />
          </div>
          <h3>Nome</h3>
          <h3>Custo</h3>
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
          <input type="text" />
          <input type="number" />
        </section>
      }
      

      
    </div>
  )
}