import { Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Header = ({socket}) => {

    const navigation = useNavigate()

    const handleLeaveChatButton = (e) => {
        localStorage.removeItem("username")
        navigation("/")
    }
    return (
        <Row className="justify-content-end py-3">
            <Col sm={"9"}>
                <h2>Sample chat</h2>
            </Col>
            <Col sm={"3"} className={"text-end"}>
                <Button type="button" variant="danger" onClick={handleLeaveChatButton}>Lascia chat</Button>
            </Col>
        </Row>
    )
}

export default Header