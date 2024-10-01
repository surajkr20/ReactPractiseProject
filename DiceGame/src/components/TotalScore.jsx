import React from 'react';
import styled from 'styled-components';

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore;

const ScoreContainer = styled.div`

h1{
    font-size : 95px;
    font-weight : 600;
    line-height : 90px;
}
p{
    color : black;
    font-weight : 600;
    font-size : 25px;
    font-family : serif;
}

`