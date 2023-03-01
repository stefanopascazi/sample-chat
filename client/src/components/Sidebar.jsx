import { Col } from 'react-bootstrap'
import React from 'react'

const Sidebar = ({ socket }) => {

    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        socket.on('newUserResponse', (data) => setUsers(data));
    }, [socket, users]);
    return (
        <Col sm="3">
            {users.map(v => <p key={v.socketID}>{v.username}</p>)}
        </Col>
    )
}

export default Sidebar