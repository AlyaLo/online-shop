import React from "react";
import { Container, Form, Card, Button, Row } from "react-bootstrap";
import { NavLink,useLocation } from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from '../utils/consts'

const Auth = () => {
    let location = useLocation();
    let isLogin = location.pathname === LOGIN_ROUTE
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
    
                        <Button className="mt-3" variant="outline-dark">
                            {isLogin? 'Enter' : 'Registration'}
                        </Button>
                </Row>
                
            </Card>
        
        </Container>
    )
}

export default Auth