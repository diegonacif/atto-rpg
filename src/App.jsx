import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Attributes } from './components/Attributes/Attributes'
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';

import { GlobalSum } from './Contexts/GlobalSum';

import './Styles/global.css';

function App() {
  const [activeCategory, setActiveCategory] = useState('');
  const [sum, setSum] = useState(0);
  const [attSum, setAttSum] = useState(0);

  return (
    <GlobalSum.Provider 
      value={{ 
        sum, setSum, attSum, setAttSum
      }}
    >
      <Header />
      <Navbar />
      <Outlet />
    </GlobalSum.Provider>
  )
}

export default App
