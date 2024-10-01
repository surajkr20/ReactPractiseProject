import React from "react";
import { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { Button, OutlineButton } from "../Styled/Button";
import Rules from "./Rules";


const GamePlay = ({}) => {
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState();
  const [currentDice, setCurrenctDice] = useState(1);
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState();

  const randomNumberGenerate = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {

    if(!selected){
      setError("you have not selected any number!")
      return;
    }
    setError('');

    const randomNumber = randomNumberGenerate(1, 7);
    setCurrenctDice((prev) => randomNumber);

    if(selected == randomNumber) {
      setScore((prev) => prev + randomNumber);
    }else{
      setScore((prev)=> prev - 2)
    }
    setSelected(undefined);
  };

  const resetScore = () =>{
    setScore(0)
  }

  return (
    <div>
      <div className="flex justify-around items-center p-8">
        <TotalScore score={score}/>
        <div>
          <NumberSelector selected={selected} setSelected={setSelected} error={error} setError={setError}/>
        </div>
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="flex flex-col items-center gap-2">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={()=>setShowRules(prev => !prev)}>
          {
            showRules ? 'Hide': 'Show'
          }
         {" "}Rules</Button>
      </div>
      {showRules && <Rules/>}
    </div>
  );
};

export default GamePlay;
