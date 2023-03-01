import React from 'react'
import { Col, Row } from 'react-bootstrap'

const User = ({username, text}) => {
    return (
        <Row className='justify-content-start my-2'>
            <Col xs={"auto"} className='p-2 bg-primary text-light rounded'>
                <p className='mb-0'><strong>{username}</strong><br/>
                {text}</p>
            </Col>
        </Row>
    )
}

export default User