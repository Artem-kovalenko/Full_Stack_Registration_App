import React from "react";
import { useSelector } from "react-redux";
import history from "../../history";
import { PageWrapper, Title, Message, Button } from "./successRegisterStyled"; 

const SuccessRegister = () => {
    const {participantData}  = useSelector(state => state.participantData.data)

    return (
        <PageWrapper>
            <Title>Registration successfully finished!</Title>
            <Message>Dear {participantData.firstName + " " + participantData.lastName}, we sent to you letter with confirmation,
            please chek your email, {participantData.email} for more information</Message>
            <Button onClick={() => {history.push("/")}}>Go home</Button>
        </PageWrapper>
    )
}

export default SuccessRegister