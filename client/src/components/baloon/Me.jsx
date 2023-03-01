import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Me = ({username, text}) => {
    return (
        <Row className='justify-content-end my-2'>
        <Col xs={"auto"} className='p-2 bg-success text-light rounded'>
            <p className='mb-0'><strong>{username}</strong><br/>
            {text}</p>
        </Col>
        </Row>
    )
}

export default Me