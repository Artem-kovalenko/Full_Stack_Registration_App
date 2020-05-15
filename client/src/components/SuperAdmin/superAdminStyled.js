import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    
`

export const HeaderNav = styled.div`
    border-radius: 10px;
    margin: 10px;
    width: 55%;
    display: flex;
    justify-content: space-evenly;
    height: 70px;
    align-items: center;
    background-color: #00d0ff6b;
`

export const Button = styled.button`
    outline: none;
    cursor: pointer;
    border: 1px solid #0095ff;
    padding: 7px 21px;
    border-radius: 12px;
    background-color: white;
    font-size: 16px;
    transition: .3s;
    &:hover {
        background-color: #0095ff;
        color:white;
    }
`