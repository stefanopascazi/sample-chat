import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Sidebar = React.lazy(() => import("../components/Sidebar"))
const Wrapper = React.lazy(() => import("../components/Wrapper"))


const Chat = ({socket}) => {
    return (
        <Container className='bg-light'>
            <Row>
                <React.Suspense fallback={<>loading...</>}>
                    <Sidebar socket={socket} />
                </React.Suspense>
                <React.Suspense fallback={<>loading...</>}>
                    <Wrapper socket={socket} />
                </React.Suspense>
            </Row>
        </Container>
    )
}

export default Chat