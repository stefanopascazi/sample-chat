import React from 'react'
import {Col} from 'react-bootstrap'

const Header = React.lazy(() => import("./Header"))
const Content = React.lazy(() => import("./Content"))

const Wrapper = ({socket}) => {
    return (
        <Col sm="9">
            <React.Suspense fallback={<>loading...</>}>
                <Header socket={socket} />
            </React.Suspense>
            <React.Suspense fallback={<>loading...</>}>
                <Content socket={socket} />
            </React.Suspense>
        </Col>
    )
}

export default Wrapper