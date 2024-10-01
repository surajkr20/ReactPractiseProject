import React from "react";
import styled from "styled-components";

const NavTop = () => {
  return (
    <Navcontainer>
      <div className="navtop flex justify-between items-center">
        <img src="./public/img/logo.png" alt="" />
        <input
          type="text"
          placeholder="search"
          className="border-[2px] border-red-600 p-1 rounded"
        />
      </div>
      <div className="navbottom flex justify-center items-center gap-6">
        <button className="bg-red-800 p-1 w-[60px] rounded font-serif">All</button>
        <button className="bg-red-800 p-1 w-[80px] rounded font-serif">Breakfast</button>
        <button className="bg-red-800 p-1 w-[60px] rounded font-serif">Lunch</button>
        <button className="bg-red-800 p-1 w-[60px] rounded font-serif">Dinner</button>
      </div>
    </Navcontainer>
  );
};

export default NavTop;

const Navcontainer = styled.div`

  margin-top: 20px;
  padding: 28px;

  .navtop{
    margin : 0 auto;
    max-width: 90vw;
  }
  .navbottom{
    margin-top : 30px;
  }
`
