import React from 'react'
import {Col, Card, Image} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {DEVICE_ROUTE} from '../utils/consts'

export const DeviceItem = ({device}) =>{
    const history = useNavigate()
    return (
        <Col md = {3} onClick = {()=> history(DEVICE_ROUTE + '/' + device.id)}>
            <Card style = {{width: 200, cursor: 'pointer'}} className = 'm-3 bg-light'>
                <Image className='m-3' width={165} height={150} src = {device.src}/>
                <div className='d-flex ml-3 justify-content-between align-items-center'>
                    <div>Samsung</div>
                </div>
                <div className= 'ml-3 mt-1 mb-2'>{device.name}</div>
            </Card>
        </Col>
    )

}