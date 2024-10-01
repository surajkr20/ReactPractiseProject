
import React from 'react'

const Buttons = () => {
  return (
    <div className='m-0 m-auto max-w-[80vw]'>
      <div className='flex gap-8 p-2'>
        <button className='bg-blue-700 w-[12vw] text-white rounded font-serif p-2'>VIA SUPPORT CHAT</button>
        <button className='bg-black w-[12vw] text-white rounded font-serif p-2'>VIA CALL</button>
      </div>
      <div className='p-2'>
        <button className='bg-red-700 w-[26vw] text-white rounded font-serif p-2'>VIA EMAIL FORM</button>
      </div>
    </div>
  )
}

export default Buttons;
