
import React from 'react'
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <div className='grid-background'></div>
      <main className='min-h-screen container'>

        <Outlet/>
      </main>
      <div className='p-10 text-center m-10 bg-gray-800'>
        Made with by Suraj Kumar
      </div>
    </div>
  )
}

export default AppLayout;
