import { Container, Row, Col, Breadcrumb, Card, Figure } from "react-bootstrap";
import { PinMap } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./GetToKnowTheCounty.css";
import GetToKnowTheCountyDetail from "./GetToKnowTheCountyDetail";
import CountyList from "./CountyList";
import Header from "../layout/Header";
import Footer from "../layout/Footer";



function GetToKnowTheCounty() {
    const [countries, fetchCountries] = useState([]);

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((res) => {
                fetchCountries(res)
            }).catch((error) => console.log('error', error))
    }
    useEffect(() => {
        getData()
    }, []);
    return (
        <div className="page-wrapper">
            <Header />
            <div className="content w-bg single-bg" style={{ backgroundImage: `url("/assets/images/general/get-to-know-county-bg.jpeg")` }}>
                <Container>
                    <div className="text-start bg-content">
                        <Row>
                            <Col xl={6}>
                                <h2>Find adventure unlike any other</h2>
                                <p>Discover the many adventures Hamburg has to offer.</p>
                            </Col>
                        </Row>
                    </div>
                    <Breadcrumb className="breadcrumbs">
                        <Link to="/">Home</Link>
                        <Link to="/get-to-know-the-county" className="active">Get to know the county</Link>
                    </Breadcrumb>
                </Container>
            </div>
            <div className="content my-100 countries">
                <Container>
                    <div className="text-center mb-5">
                        <span className="icon large">
                            <PinMap />
                        </span>
                        <h1 className="main-title">Get to know the county</h1>
                    </div>
                    <Row className="justify-content-center">
                        {countries.map(item => {

                            return (
                                <Col xl={2} key={item.id}>
                                    <CountyList link={item.id} name={item.name} />
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );

}
export default GetToKnowTheCounty;