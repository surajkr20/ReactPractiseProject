import styles from './Nav.module.css';
import React from 'react';

const Nav = () => {
    console.log(styles)
  return (
    <>
      <nav className = {`flex justify-between items-center m-0 m-auto max-w-[80vw] h-[72px]`}>
        <div className='w-[5vw]'>
            <img src="./img/logo.png" alt="" />
        </div>
        <ul className='flex gap-6 font-serif text-blue-700'>
            <li href='#'>Home</li>
            <li href='#'>About</li>
            <li href='#'>Contact</li>
        </ul>
      </nav>
    </>
  )
}

export default Nav;
