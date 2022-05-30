import React from "react";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { TypeBar } from "../components/TypeBar";
import BrandBar from '../components/BrandBar'
import { DeviceList } from "../components/DeviceList";

const Shop = () => {
    return(
        <Container style = {{marginLeft: '13%', marginTop: 20}}> 
            <Row className=""> 
                <Col md = {3}>
                    <TypeBar/>
                </Col>
                <Col md = {9}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    )
}

export default Shop