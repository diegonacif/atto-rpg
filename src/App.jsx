import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';

import { GlobalSum } from './Contexts/GlobalSum';

import './Styles/global.css';

function App() {
  const [sum, setSum] = useState(0);
  const [attSum, setAttSum] = useState(0);
  const [skillSum, setSkillSum] = useState(0);

  const [navActive, setNavActive] = useState(1);

  useEffect(() => {
    setSum(attSum + skillSum)
  }, [attSum, skillSum])

  return (
    <GlobalSum.Provider 
      value={{ 
        navActive, setNavActive, sum, setSum, attSum, setAttSum,
      }}
    >
      <Header />
      {/* <Navbar /> */}
      <Outlet />
    </GlobalSum.Provider>
  )
}

export default App
