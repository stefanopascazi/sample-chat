import React from 'react'
import { Col, Row } from 'react-bootstrap'


const Footer = React.lazy(() => import("./Footer"))
const Me = React.lazy(() => import("./baloon/Me"))
const User = React.lazy(() => import("./baloon/User"))

const Content = ({ socket }) => {

    const [dataContent, setDataContent] = React.useState([])
    const lastMessageRef = React.useRef(null);

    const handleDataContent = (user, txt) => {
        setDataContent(prevState => [...prevState, {
            username: user,
            text: txt
        }])
    }

    React.useEffect(() => {
        socket.on('messageResponse', (data) => setDataContent([...dataContent, data]));
      }, [socket, dataContent]);

    React.useEffect(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, [dataContent]);
    //React.useEffect(() =>)
    return (
        <>
            <Row >
                <Col sm={"12"}>
                    <Col sm={"12"} className={"bg-white border p-3"} style={{
                        height: "300px",
                        overflowY: "scroll"
                    }}>
                        {
                            dataContent.map((v,i) => {
                                if( v.username === localStorage.getItem("username") )
                                {
                                    return <Me username={v.username} text={v.text} key={i} />
                                }
                                return <User username={v.username} text={v.text} key={i} />
                            })
                        }
                        <div ref={lastMessageRef} />
                    </Col>
                </Col>
            </Row>
            <Footer socket={socket} handleDataContent={handleDataContent} />
        </>
    )
}

export default Content