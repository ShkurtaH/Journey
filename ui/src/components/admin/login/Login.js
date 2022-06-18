
import { Button, ButtonGroup, Col, Container, Form, Row } from "react-bootstrap";
import "./Login.css";

export default function Login() {
    return (
        <div className="bg-white admin-auth">
            <Container>
                <Row className="justify-content-center">
                    <Col xl={5}>
                        <Form action="/admin/dashboard" >
                            <h4 className="text-center mb-4">Sign In</h4>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username or E-Mail</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me" />
                            </Form.Group>
                            <Button type="submit" className="main-btn">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}