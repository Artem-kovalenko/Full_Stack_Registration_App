import styled from "styled-components";

export const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction:column;
    border: 1px solid #ecaf00;
    margin: 250px 500px 0 500px;
    padding: 45px;
    border-radius: 35px;
`

export const Title = styled.h2`
    font-size: 25px;
`

export const Button = styled.button`
    color:#ecaf00;
    margin-top:20px;
    border: 1px solid #ecaf00;
    padding: 7px 21px;
    border-radius: 12px;
    background-color: white;
    font-size: 16px;
    transition: .3s;
    &:hover {
        background-color: #ecaf00;
        color:white;
      }
`