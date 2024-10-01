
import React from 'react'
import Login from './assets/components/Login';
import Profile from './assets/components/Profile';
import UserContextProvider from './context/UserContextProvider';

const App = () => {

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App;
