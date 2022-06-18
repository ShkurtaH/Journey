import { Container, Row, Col, Breadcrumb, Figure } from "react-bootstrap"
import { PersonCircle } from "react-bootstrap-icons"
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import "./Places.css";

export default function PlacesList() {
    return (
        <div className="page-wrapper">
            <Header />
            <div className="content w-bg single-bg" style={{ backgroundImage: `url("/assets/images/general/hotel.jpeg")` }}>
                <Container>
                    <div className="text-start bg-content">
                        <Row>
                            <Col xl={6}>
                                <h2>Lay your head on one of the best hotels in the world</h2>
                                <p>Discover best hotels list.</p>
                            </Col>
                        </Row>
                    </div>
                    <Breadcrumb className="breadcrumbs">
                        <Link to="/">Home</Link>
                        <Link to="/places-to-stay">Places to Stay</Link>
                        <Link to="/" className="active">Hotels</Link>
                    </Breadcrumb>
                </Container>
            </div>
            <Container>
                <div className="content my-100">
                    <Row>
                        <Col xl={4}>
                            <div className="list-item mb-3">
                                <div className="list-item-wrapper">
                                    <Figure data-price="From 25 $">
                                        <img src="/assets/images/general/hotel/room-5-1024x664.jpeg" alt="" />
                                        <div className="list-info">
                                            <h5>Double Room</h5>
                                            <ul>
                                                <li>
                                                    <PersonCircle />
                                                    2 Guests
                                                </li>
                                            </ul>
                                        </div>
                                    </Figure>
                                    <div className="overlay">
                                        <Link to="/places-to-stay/list/detail" className="main-btn">View More</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className="list-item mb-3">
                                <div className="list-item-wrapper">
                                    <Figure data-price="From 30 $">
                                        <img src="/assets/images/general/hotel/room-6-1024x664.jpeg" alt="" />
                                        <div className="list-info">
                                            <h5>Family Room</h5>
                                            <ul>
                                                <li>
                                                    <PersonCircle />
                                                    3 Guests
                                                </li>
                                            </ul>
                                        </div>
                                    </Figure>
                                    <div className="overlay">
                                        <Link to="/places-to-stay/list/detail" className="main-btn">View More</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className="list-item">
                                <div className="list-item-wrapper">
                                    <Figure data-price="From 67 $">
                                        <img src="/assets/images/general/hotel/room-4-1024x664.jpeg" alt="" />
                                        <div className="list-info">
                                            <h5>Luxury Room</h5>
                                            <ul>
                                                <li>
                                                    <PersonCircle />
                                                    2 Guests
                                                </li>
                                            </ul>
                                        </div>
                                    </Figure>
                                    <div className="overlay">
                                        <Link to="/places-to-stay/list/detail" className="main-btn">Add to suitcase</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className="list-item">
                                <div className="list-item-wrapper">
                                    <Figure data-price="From 67 $">
                                        <img src="/assets/images/general/hotel/room-3-1024x664.jpeg" alt="" />
                                        <div className="list-info">
                                            <h5>Apartment</h5>
                                            <ul>
                                                <li>
                                                    <PersonCircle />
                                                    5 Guests
                                                </li>
                                            </ul>
                                        </div>
                                    </Figure>
                                    <div className="overlay">
                                        <Link to="/places-to-stay/list/detail" className="main-btn">Add to suitcase</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className="list-item">
                                <div className="list-item-wrapper">
                                    <Figure data-price="From 76 $">
                                        <img src="/assets/images/general/hotel/room-2-1024x664.jpeg" alt="" />
                                        <div className="list-info">
                                            <h5>Room with view</h5>
                                            <ul>
                                                <li>
                                                    <PersonCircle />
                                                    4 Guests
                                                </li>
                                            </ul>
                                        </div>
                                    </Figure>
                                    <div className="overlay">
                                        <Link to="/suitcase" className="main-btn">Add to suitcase</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className="list-item">
                                <div className="list-item-wrapper">
                                    <Figure data-price="From 56 $">
                                        <img src="/assets/images/general/hotel/room-2-1024x664.jpeg" alt="" />
                                        <div className="list-info">
                                            <h5>Small woom</h5>
                                            <ul>
                                                <li>
                                                    <PersonCircle />
                                                    1 Guests
                                                </li>
                                            </ul>
                                        </div>
                                    </Figure>
                                    <div className="overlay">
                                        <Link to="/suitcase" className="main-btn">Add to suitcase</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </div>
            </Container>
            <Footer />
        </div>
    )
}