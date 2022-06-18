import { Button, ButtonGroup, Col, Container, Form, Row } from "react-bootstrap";
import "./Register.css";
import NavElements from "../layout/NavElements";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import React, {SyntheticEvent, useState} from 'react';
import { applyInitialState } from "@mui/x-data-grid/hooks/features/columns/gridColumnsUtils";

const Register = () => {
    //this is how we handle states in react,name:is variable, setName:is natural function that change name variable.
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    const submit = (e: SyntheticEvent) =>{
        console.log({
            name,
            email,
            password
        })
    }
    return (
        <form onSubmit ={submit}>
        <div className="bg-white user-register">
            
        <Header/>
            <Container>
                <Row className="justify-content-center">
                    <Col xl={5}>
                        <Form action="/Register" >
                            <h4 className="text-center mb-4">Register</h4>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label> 
                                <Form.Control type="text" required onChange={e => setName(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>E-Mail Address</Form.Label>
                                <Form.Control type="email" required onChange={e => setEmail(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="" required onChange={e => setPassword(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me" />
                            </Form.Group>
                            <Button type="submit" className="main-btn">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
            <Footer/>
        </div>
        </form>
    );
};

export default Register;