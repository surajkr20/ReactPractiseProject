
import './App.css';
import GamePlay from './components/GamePlay';
import Start from './components/Start';
import { useState } from 'react';


function App() {
  const [IsGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () =>{
    setIsGameStarted((prev) => !prev)
  }
  return (
    <>
      {
        IsGameStarted ? <GamePlay/> : <Start toggle={toggleGamePlay}/>
      }
    </>
  )
}

export default App;
