import { Container, Row, Col, Breadcrumb, Form, Card, Figure } from "react-bootstrap";
import { Phone, PinFill, PinMap } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";


function PlacesToStay() {


    return (
        <div className="page-wrapper">
            <Header />
            <div className="content w-bg single-bg" style={{ backgroundImage: `url("/assets/images/general/places-to-stay-bg.jpeg")` }}>
                <Container>
                    <div className="text-start bg-content">
                        <Row>
                            <Col xl={6}>
                                <h2>Stay in wonderland for a while</h2>
                                <p>You can always find the perfect place to lay your head for the night in Hamburg.</p>
                            </Col>
                        </Row>
                    </div>
                    <Breadcrumb className="breadcrumbs">
                        <Link to="/">Home</Link>
                        <Link to="/places-to-stay" className="active">Places to Stay</Link>
                    </Breadcrumb>
                </Container>
            </div>
            <div className="content my-100">
                <Container>
                    <Row>
                        <Col xl={6}>
                            <Row>
                                <h2>Best places to lay your head!</h2> 
                            </Row>
                        </Col>
                        <Col xl={6}>
                            <Row>
                                <Col xl={6}>
                                    <Form.Select aria-label="Filter by activity type">
                                        <option>Filter by activity type</option>
                                        <option value="Camping">Camping</option>
                                        <option value="Hiking">Hiking</option>
                                        <option value="Skiing">Skiing</option>
                                        <option value="Beach">Beach</option>
                                        <option value="Mountains">Mountains</option>
                                    </Form.Select>
                                </Col>
                                <Col xl={6}>
                                    <Form.Select aria-label="Filter by activity type">
                                        <option>Filter by location</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Hawai">Hawai</option>
                                        <option value="USA">USA</option>
                                        <option value="Croatia">Croatia</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col xl={3}>
                            <Card className="main-card">
                                <div className="item-img-wrapper">
                                    <Card.Img variant="top" src="/assets/images/general/hotel.jpeg" className="item-img" />
                                    <div className="overlay">
                                        <Card.Title>
                                            <Link to="/places-to-stay/list" className="item-link">Hotel</Link>
                                        </Card.Title>
                                        <ul>
                                            <li><PinFill />Albania</li>
                                            <li><Phone />+385 55 99 88</li>
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xl={3}>
                            <Card className="main-card">
                                <div className="item-img-wrapper">
                                    <Card.Img variant="top" src="/assets/images/general/camp-house.jpeg" className="item-img" />
                                    <div className="overlay">
                                        <Card.Title>
                                            <Link to="/places-to-stay/list" className="item-link">Camp House</Link>
                                        </Card.Title>
                                        <ul>
                                            <li><PinFill />Albania</li>
                                            <li><Phone />+385 55 99 88</li>
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xl={3}>
                            <Card className="main-card">
                                <div className="item-img-wrapper">
                                    <Card.Img variant="top" src="/assets/images/general/cabin.jpg" className="item-img" />
                                    <div className="overlay">
                                        <Card.Title>
                                            <Link to="/activity-detail" className="item-link">Cabin</Link>
                                        </Card.Title>
                                        <ul>
                                            <li><PinFill />Italy</li>
                                            <li><Phone />+385 55 99 88</li>
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xl={3}>
                            <Card className="main-card">
                                <div className="item-img-wrapper">
                                    <Card.Img variant="top" src="/assets/images/general/apartment.jpg" className="item-img" />
                                    <div className="overlay">
                                        <Card.Title>
                                            <Link to="/activity-detail" className="item-link">Apartment</Link>
                                        </Card.Title>
                                        <ul>
                                            <li><PinFill />Australia</li>
                                            <li><Phone />+385 55 99 88</li>
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        {/* <Col xl={3}>
                            <Card className="main-card">
                                <div className="item-img-wrapper">
                                    <Card.Img variant="top" src="/assets/images/general/skiing.jpeg" className="item-img" />
                                    <div className="overlay">
                                        <Card.Title>
                                            <Link to="/activity-detail" className="item-link">Skiing</Link>
                                        </Card.Title>
                                        <ul>
                                            <li><PinFill />Australia</li>
                                            <li><Phone />+385 55 99 88</li>
                                        </ul>
                                    </div>

                                    <div className="bottom-btns d-flex justify-content-between">
                                        <button className="main-btn bg-dark-violet rounded-0">From $ 400.00</button>
                                        <button className="main-btn bg-dark-violet rounded-0">Add to suitcase</button>
                                    </div>
                                </div>
                            </Card>
                        </Col> */}
                    </Row>
                </Container>
            </div>
            <div className="content my-100" id="scrollable">
                <Container>
                    <div className="text-center mb-5">
                        <span className="icon large">
                            <PinMap />
                        </span>
                        <h1 className="main-title">Find things to do</h1>
                    </div>
                    <Row className="justify-content-center">
                        <Col xl={2}>
                            <Card>
                                <Link to="/wilderness" className="card-link">
                                    <Figure className="card-img">
                                        <Card.Img variant="top" src="../../../assets/images/general/beach-activity.jpg" alt="Beaches" />
                                        <Card.Body>
                                            <Card.Text>
                                                Beaches
                                            </Card.Text>
                                        </Card.Body>
                                    </Figure>
                                </Link>
                            </Card>
                        </Col>
                        <Col xl={2}>
                            <Card>
                                <Link to="/skiing" className="card-link">
                                    <Figure className="card-img">
                                        <Card.Img variant="top" src="../../../assets/images/general/skiing.jpeg" alt="Wilderness" />
                                        <Card.Body>
                                            <Card.Text>
                                                Skiing
                                            </Card.Text>
                                        </Card.Body>
                                    </Figure>
                                </Link>
                            </Card>
                        </Col>
                        <Col xl={2}>
                            <Card>
                                <Link to="/camping" className="card-link">
                                    <Figure className="card-img">
                                        <Card.Img variant="top" src="../../../assets/images/general/camping-cat.jpeg" alt="Wilderness" />
                                        <Card.Body>
                                            <Card.Text>
                                                Camping
                                            </Card.Text>
                                        </Card.Body>
                                    </Figure>
                                </Link>
                            </Card>
                        </Col>
                        <Col xl={2}>
                            <Card>
                                <Link to="/countries" className="card-link">
                                    <Figure className="card-img">
                                        <Card.Img variant="top" src="../../../assets/images/general/places.jpeg" alt="Wilderness" />
                                        <Card.Body>
                                            <Card.Text>
                                                Countries
                                            </Card.Text>
                                        </Card.Body>
                                    </Figure>
                                </Link>
                            </Card>
                        </Col>
                        <Col xl={2}>
                            <Card>
                                <Link to="/beaches" className="card-link">
                                    <Figure className="card-img">
                                        <Card.Img variant="top" src="../../../assets/images/general/beaches.jpeg" alt="Wilderness" />
                                        <Card.Body>
                                            <Card.Text>
                                                Beaches
                                            </Card.Text>
                                        </Card.Body>
                                    </Figure>
                                </Link>
                            </Card>
                        </Col>

                    </Row>
                    <div className="text-center mt-5">
                        <Link to="/things-to-do" className="main-btn">View activities</Link>
                    </div>

                </Container>
            </div>
            <Footer />
        </div >
    );
}
export default PlacesToStay;