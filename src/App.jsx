import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Attributes } from './components/Attributes/Attributes'
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';

import { GlobalSum } from './Contexts/GlobalSum';

import './Styles/global.css';

function App() {
  const [sum, setSum] = useState(0);
  const callbackSum = (value) => {
    setSum(value);
  } 

  return (
    <GlobalSum.Provider value={{ sum, setSum, callbackSum}}>
      <Header sumValue={sum}/>
      <Navbar />
      <Outlet />
    </GlobalSum.Provider>
  )
}

export default App
