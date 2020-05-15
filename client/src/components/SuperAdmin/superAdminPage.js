import React from "react";
import { Wrapper, HeaderNav, Button } from "./superAdminStyled";
import { Link } from 'react-router-dom';

const SuperAdminPage = () => {

    return(
        <Wrapper>
            <HeaderNav>
            <Link to="/users_page"> <Button>  Users </Button> </Link>
            <Link to="/participants_page"><Button>Participants</Button></Link>
            </HeaderNav>
        </Wrapper>
    )
}

export default SuperAdminPage