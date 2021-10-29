import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer(){
    return(
        <Container>
            <Row>
                <Col>
                    <small>&copy; 2021 Bill & Tom's Bait & Tackle. All Rights Reserved.</small>
                </Col>
            </Row>
        </Container>
    )
}