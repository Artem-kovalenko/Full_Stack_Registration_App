import React from "react";
import { Link } from "react-router-dom";
import { HomeWrapper, Title, Button } from "./homeStyled";

const Home = () => {

    return (
        <HomeWrapper>
            <Title>Hello! To register to the conference click this button:</Title>
            <Link to="/first_register">
                <Button>Lets Go!</Button>
            </Link>
        </HomeWrapper>
    );
}

export default Home