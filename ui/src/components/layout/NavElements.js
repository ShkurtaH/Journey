import { Navbar, Container, Nav, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

import { BoxArrowInRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import logo from '../../logo_transparent.png';


function NavElements() {
    const [navList, fetchNavLinks] = useState([]);

    const getData = () => {
        fetch('http://localhost:5056/api/Navigation')
            .then((res) => res.json())
            .then((res) => {
                fetchNavLinks(res)
            }).catch((error) => console.log('error', error))
    }
    useEffect(() => {
        getData()
    }, []);
    return (
        <Navbar bg="transparent" expand="lg">
            <Container>
                <div className="navbar-brand">
                    <Link to="/"><img src={logo} alt="Journery Platform" /></Link>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {navList.map(item => {
                            return (
                                <Link to={item.Link} className="nav-link" key={item.NavigationID}>{item.Title}</Link>
                            );
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavElements;