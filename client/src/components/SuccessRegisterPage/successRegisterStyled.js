import styled from "styled-components";

export const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction:column;
    border: 1px solid #78aeff;
    margin: 250px 300px 0 300px;
    padding: 45px;
    border-radius: 35px;
`

export const Title = styled.h2`
    font-size: 30px;
`

export const Message = styled.p`
    font-size: 17px;
    text-align: center;
    margin: 15px 0 30px 0;
`

export const Button = styled.button`
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