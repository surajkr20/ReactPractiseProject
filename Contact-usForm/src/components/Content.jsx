import React from "react";
import Buttons from "./Buttons";
import './Content.css';

const Content = () => {
  return (
    <div className="flex justify-between m-0 m-auto w-[80vw]">
      <div>
        <Buttons />
        <form className="m-2">
          <label>
            <input type="text" className="w-[26vw] border-2 p-2" />
          </label>
          <label className="flex mt-5">
            <input type="text" className="w-[26vw] border-2 p-2" />
          </label>
          <label className="flex mt-5">
            <input type="text" className="w-[26vw] border-2 p-6" />
          </label>
        </form>
        <button className='bg-green-600 w-[12vw] text-white rounded font-serif p-2 m-2'>Submit</button>
      </div>

      <div>
        <img src="./img/contact.png" alt="" className="h-[65vh] w-[50vw]" />
      </div>
    </div>
  );
};

export default Content;
