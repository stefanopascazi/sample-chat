import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Row, Col, Button, Container } from 'react-bootstrap'

const Home = ({socket}) => {

    const navigate = useNavigate();
    const [username, setUserName] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem("username", username);
        socket.emit("newUser", {
            username: username,
            socketID: socket.id
        })
        navigate("/chat")
    }

    return (
        <Container>
            <Row className='justify-content-center mt-5'>
                <Col xs="4" className='bg-light p-5 shadow'>
                    <Form onSubmit={handleSubmit}>
                        <h2>Sign in to Open Chat</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" minLength={6} placeholder="Enter username" onChange={(e) => setUserName(e.target.value)} />
                        </Form.Group>
                        <div className='d-grid'>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Home