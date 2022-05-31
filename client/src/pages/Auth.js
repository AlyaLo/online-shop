import React, {useContext, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = () => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            history(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }
    return(
        <Container
            className=" d-flex justify-content-center align-items-center"
            style = { {height: window.innerHeight - 54}}
            
        >
            <Card style = {{width: 600}} className = 'p-5' bg = 'light'>
                <h2 className = 'm-auto'>{isLogin ? 'Authorization' : 'Registration'}</h2>
                
                <Form className = 'd-flex flex-column'>
                    {
                        isLogin ? 
                        <>
                        <Form.Control className="mt-2"  placeholder = "Email..."/>

                        <Form.Control className="mt-2" placeholder = "Password..."/>
                        </>
                        
                        :
                        <>
                        <Form.Control className="mt-3"  placeholder = "NickName..."/>
                        <Form.Control className="mt-2"  placeholder = "Email..."/>
                        <Form.Control className="mt-2" placeholder = "Password..."/>
                        <Form.Control className="mt-2" placeholder = "Password Again..."/>
                        </>
                    }
                    
            
                </Form>
                <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin?   <div>
                                        No account? <NavLink to={REGISTRATION_ROUTE}>Registration!</NavLink>
                                    </div>
                                    :
                                    <div>
                                        Have account? <NavLink to={LOGIN_ROUTE}>Login!</NavLink>
                                    </div>
                            }
    
                        <Button className="mt-3" variant="outline-dark" onClick={click}>
                            {isLogin? 'Enter' : 'Registration'}
                        </Button>
                </Row>
                
            </Card>
        
        </Container>
    )
}

export default Auth