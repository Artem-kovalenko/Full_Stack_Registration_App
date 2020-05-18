import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
`

export const Table = styled.table`
     box-shadow: 0 0 10px rgba(0,0,0,0.5);
     border: 1px solid lightgrey;
     width: 58%;
`

export const Th = styled.th`
     padding: 10px;
     background: aliceblue;
     color: black;
     fontWeight: bold;
`

export const Td = styled.td`
    padding: 10px;
    border: solid 1px gray;
    background: papayawhip;
`

export const Button = styled.button`
    color:black;
    outline: none;
    cursor: pointer;
    border: 1px solid black;
    padding: 7px 21px;
    border-radius: 12px;
    background-color: white;
    font-size: 16px;
    transition: .3s;
    &:hover {
        background-color: papayawhip;
    }
`
