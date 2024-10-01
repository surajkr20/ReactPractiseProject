import styled from 'styled-components';
import React from 'react';

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
            after click on dice if selected number is equal to dice you will get same points as dice{""}
        </p>
        <p>
            if you get wrong quess then 2 point will be deducted
        </p>
      </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
    text-align : left;
    max-width: 500px;
    background-color : #fbf1f1;
    padding : 20px;
    border-radius: 10px;
    margin-left: 50px;
    border: 1px solid black;
    h2{
        font-size: 15px;
        font-weight : bold;
    }
    .text{
        font-size: 10px;
    }
`
