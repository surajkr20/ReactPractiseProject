import React from "react";
import "./FoodContainer.css";
import styled from "styled-components";
import FoodCards from './FoodCards'


const FoodContainer = ({data}) => {
  return (
    <Container className="bg-img">
      <FoodCards data = {data}/>
    </Container>
  );
};

export default FoodContainer;

const Container = styled.div``;
