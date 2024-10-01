import styled from "styled-components";

export const Button = styled.button`
    background-color: black;
    border: 1px solid transparent;
    color: white;
    padding: 8px;
    font-size: 15px;
    border-radius: 10px;
    font-weight: 500;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    width: 170px;
    transition: 0.4s background ease-in;

    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s background ease-in;
    }
`
export const OutlineButton = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover{
        background-color: black;
        border: 1px solid black;
        color: white;
    }

`
