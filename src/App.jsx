import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';

import { GlobalSum } from './Contexts/GlobalSum';

import './Styles/global.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [sum, setSum] = useState(0); // Resultado
  const [costSum, setCostSum] = useState(0); // Gasto
  const [expSum, setExpSum] = useState(0); // Entrada

  const [attSum, setAttSum] = useState(0);
  const [skillSum, setSkillSum] = useState(0);
  const [vantageSum, setVantageSum] = useState(50);
  const [disvantageSum, setDisvantageSum] = useState(30);

  const [navActive, setNavActive] = useState(1);

  useEffect(() => {
    setCostSum((attSum + skillSum + vantageSum) - disvantageSum)
  }, [attSum, skillSum, disvantageSum, vantageSum])

  useEffect(() => {
    setSum(expSum - costSum)
  }, [costSum, expSum])

  return (
    <GlobalSum.Provider 
      value={{ 
        navActive, 
        setNavActive, 
        sum, 
        setSum, 
        attSum, 
        setAttSum,
        skillSum,
        setSkillSum,
        costSum,
        setCostSum,
        expSum,
        setExpSum,
        disvantageSum,
        setDisvantageSum,
        vantageSum,
        setVantageSum,
      }}
    >
      <Header />
      <Outlet />
    </GlobalSum.Provider>
  )
}

export default App
