import { Container, Row, Col, Breadcrumb, Form, Card, Figure, NavItem } from "react-bootstrap";
import { MapFill, Phone, PhoneFill, PinFill, TelephoneFill, PinMap } from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";
import { Component, useEffect, useState } from "react";
import "./GetToKnowTheCounty.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

function GetToKnowTheCountyDetail(props) {
    const { userId } = useParams();
    const [users, fetchUsers] = useState([]);

    const getData = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((res) => res.json())
            .then((res) => {
                fetchUsers(res)
            }).catch((error) => console.log('error', error))
    }
    useEffect(() => {
        getData()
    }, []);

    const thisUser = users;

    return (
        <div className="page-wrapper">
            <Header />
            <div className="content w-bg single-bg" style={{ backgroundImage: `url("/assets/images/general/get-to-know-county-bg.jpeg")` }}>
                <Container>
                    <div className="text-start bg-content">
                        <Row>
                            <Col xl={6}>
                                <h2>Find adventure unlike any other</h2>
                                <p>Discover the many adventures "{thisUser.name}" has to offer.</p>
                            </Col>
                        </Row>
                    </div>
                    <Breadcrumb className="breadcrumbs">
                        <Link to="/">Home</Link>
                        <Link to="/get-to-know-the-county">Get to know county</Link>
                        <Link to="/get-to-know-the-county" className="active">{thisUser.name}</Link>
                    </Breadcrumb>
                </Container>
            </div>
            <div className="content my-100 countries">
                <Container>
                    <div className="text-center mb-5">
                        <span className="icon large">
                            <PinMap />
                        </span>
                        <h1 className="main-title">Get to know the {thisUser.name}</h1>
                    </div>
                    <h3>{thisUser.name}</h3>
                    <ul>
                        <li>{thisUser.username}</li>
                        <li>{thisUser.email}</li>
                        <li>{thisUser.phone}</li>
                        <li>{thisUser.website}</li>
                        {/* <li>{thisUser.address.suite}</li>
                        <li>{thisUser.address.city}</li>
                        <li>{thisUser.address.zipcode}</li>
                        <li>{thisUser.address.city}</li>
                        <li>{thisUser.company.name}</li> */}
                    </ul>
                </Container>
            </div>

            <Footer />
        </div>
    )
}
export default GetToKnowTheCountyDetail;