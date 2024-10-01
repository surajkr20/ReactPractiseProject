
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './Context/UserContextProvider'
import React from 'react'

const App = () => {
  return (
    <UserContextProvider>
      <h1>Login here</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App;
