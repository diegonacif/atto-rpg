import { useState } from 'react';
import { Attributes } from './components/Attributes/Attributes'
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import './Styles/global.css';

function App() {
  const [sum, setSum] = useState(0);
  const callbackSum = (value) => {
    setSum(value);
  } 

  return (
    <>
      <Header sumValue={sum}/>
      <Navbar />
      <Attributes sumValue={callbackSum} />
    </>
  )
}

export default App
