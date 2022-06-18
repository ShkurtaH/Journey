import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

function Footer() {
    return (
        <div className="bg-dark-violet footer">
            <Container>
                <Row>
                    <Col>
                        <p>© 2022 Journey Platform.  All rights reserved.</p>
                    </Col>
                </Row>

            </Container>
        </div>

    );
}
export default Footer;