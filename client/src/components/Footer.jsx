import React from 'react'
import { Form, InputGroup, Button, Row, Col } from 'react-bootstrap'
const Footer = ({ socket }) => {


    const [text, setText] = React.useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit("message", {
            text: text,
            username: localStorage.getItem("username"),
            id: `${socket.id}${Math.random()}`,
            socketID: socket.id
        })
        //handleDataContent(localStorage.getItem("username"), text)
        setText("")
    }
    return (
        <Row className='mt-5'>
            <Col sm={"12"}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>{localStorage.getItem("username")}</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="scrivi qualcosa..."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                            <Button variant="success" id="button-addon2" type='submit'>
                                send
                            </Button>
                        </InputGroup>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    )
}

export default Footer