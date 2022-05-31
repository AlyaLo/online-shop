import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useNavigate} from 'react-router-dom'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <NavLink style={{color:'black'}} to={SHOP_ROUTE}>Shop</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'green'}}>
                        <Button
                            variant="outline-dark"
                            onClick={() => history(ADMIN_ROUTE)}
                        >
                            Admin
                        </Button>
                        <Button
                        variant="outline-dark"
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            LogOut
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'green'}}>
                        <Button variant="outline-dark"  onClick={() => history(LOGIN_ROUTE)}>LogIn</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;