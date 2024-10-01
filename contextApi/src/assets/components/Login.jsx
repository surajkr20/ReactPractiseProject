import React, { useContext, useState } from "react";
import styled from "styled-components";
import UserContext from "../../context/UserContext"; // Import the context
import UserContextProvider from "../../context/UserContextProvider";

const Login = () => {
  const [username, setUsername] = useState(""); // Initialize as empty string
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext); // Destructure setUser from UserContext

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password }); // Set the user state in context
  };

  return (
    <UserContextProvider>
      <Container>
        <h1>Login Form</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleSubmit}>Submit</button>
      </Container>
    </UserContextProvider>
  );
};

export default Login;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;

  input {
    margin: 10px 0;
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      background-color: #45a049;
    }
  }
`;
