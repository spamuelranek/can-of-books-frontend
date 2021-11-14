import React from "react";
import {useAuth0} from '@auth0/auth0-react';
import { Button } from "react-bootstrap";

function LoginButton() {
    const {
        isAuthenticated, 
        loginWithRedirect
    } = useAuth0();
    return !isAuthenticated && (<Button onClick = {loginWithRedirect}>Login </Button>);
}

export default LoginButton;