import { Container, Card, Row, Col, Figure } from "react-bootstrap";
import { PinMap } from "react-bootstrap-icons";
import "./Home.css";
import { Link } from "react-router-dom";
import News from "../news/News";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

function Home() {
    return (

        <div className="homepage">
            <Header />
            <main className="main-banner position-relative" style={{ backgroundImage: `url("/assets/images/general/home-banner-2.jpeg")` }}>
                <div className="explore-now">
                    <a href="#scrollable">
                        <span className="mouse">
                            <span className="move"></span>
                        </span>
                    </a>
                </div>
            </main>
            <div className="content my-100" id="scrollable">
                <Container>
                    <div className="text-center mb-5">
                        <span className="icon large">
                            <PinMap />
                        </span>
                        <h1 className="main-title">Start planning your adventure</h1>
                    </div>
                    <Row className="justify-content-center">
                        <Col xl={2}>
                            <Card>
                                <Link to="/wilderness" className="card-link">
                                    <Figure className="card-img">
                                        <Card.Img variant="top" src="../../../assets/images/general/wilderness.jpeg" alt="Wilderness" />
                                        <Card.Body>
                                            <Card.Text>
                                                Wilderness
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

                </Container>
            </div>
            <div className="content my-100 w-bg" style={{ backgroundImage: `url("/assets/images/general/where-to-stay-bg.jpeg")` }}>
                <Container>
                    <div className="text-start bg-content">
                        <Row>
                            <Col xl={6}>
                                <h2>Where to stay?</h2>
                                <p>You can always find the perfect place to lay your head for the night in Hamburg. With an impressive variety and price range
                                    to fit every budget you can see everything this natural has to offer during the day... and sleep warm and cozy the whole night through.
                                </p>
                                <Link to="/where-to-stay" className="main-btn">Learn more</Link>
                            </Col>
                        </Row>

                    </div>

                </Container>
            </div>
            <News />
            <Footer />
        </div >

    );

}
export default Home;