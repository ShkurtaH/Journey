import { Container, Row, Col, Breadcrumb, Figure } from "react-bootstrap"
import { Bicycle, CurrencyDollar, FilePdf, HouseDoor, Person, PersonBadge, PersonCircle, Pin, PinFill, Tag, X, XLg } from "react-bootstrap-icons"
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import "./Places.css";



export default function PlacesDetail() {

    return (
        <div className="page-wrapper detail">
            <Header />
            <div className="content w-bg single-bg" style={{ backgroundImage: `url("/assets/images/general/hotel.jpeg")` }}>
                <Container>
                    <div className="text-start bg-content">
                        <Row>
                            <Col xl={6}>
                                <h2>Hotel / Double Room</h2>
                                <p>Discover our room.</p>
                            </Col>
                        </Row>
                    </div>
                    <Breadcrumb className="breadcrumbs">
                        <Link to="/">Home</Link>
                        <Link to="/places-to-stay">Places to Stay</Link>
                        <Link to="/places-to-stay/list">Hotels</Link>
                        <Link to="/" className="active">Double Room</Link>
                    </Breadcrumb>
                </Container>
            </div>
            <Container>
                <div className="content my-100">
                    <Row>
                        <Col xl={8}>
                            <h2>Double Room</h2>
                            <p>Hotel London</p>
                            <Figure data-price="From 25 $" className="mt-3">
                                <img src="/assets/images/general/hotel/room-5-1024x664.jpeg" alt="" />
                            </Figure>
                            <ul>
                                <li>
                                    <Person />
                                    2 Guests
                                </li>
                                <li>
                                    <HouseDoor />
                                    23 ft
                                </li>
                                <li>
                                    <Tag />
                                    39 $ / Per night
                                </li>
                                <li>
                                    <Pin />
                                    Amsterdam
                                </li>
                            </ul>
                            <p>Cras malesuada mauris tortor, id tempus mauris blandit sit amet. Morbi a velit efficitur, porttitor metus et, interdum nunc. Phasellus ut elementum diam. Aliquam erat volutpat. Nunc et facilisis elit. Donec consectetur nibh vel gravida aliquet. Suspendisse sit amet lectus tristique, condimentum libero vel, porta justo. Proin sit amet porta nibh. Pellentesque leo lorem, blandit quis hendrerit a, suscipit dapibus nulla. Aenean ut facilisis felis. Cras tincidunt elementum neque, id viverra magna viverra et. Nam tincidunt urna sed urna vehicula fringilla. Curabitur bibendum dictum nunc, ut elementum nibh efficitur gravida. Phasellus luctus scelerisque libero, nec lobortis tortor volutpat at. Nam vitae turpis in est tristique placerat id sed tortor. Vivamus luctus sed nibh ac cursus. Sed vel ligula non risus tempus fermentum.</p>
                            <h5>Room Service</h5>
                            <ul className="services">
                                <li>
                                    <Bicycle />
                                    King Beds
                                </li>
                                <li>
                                    <Bicycle />
                                    Bike Rental
                                </li>
                                <li>
                                    <X />
                                    No Smoking
                                </li>
                                <li>
                                    <Pin />
                                    Swimming Pool
                                </li>
                            </ul>
                            <h5>Around the Hotel</h5>
                            <ul className="around">
                                <li>Lounge Bar</li>
                                <li>Restaurants</li>
                                <li>Wellness</li>
                            </ul>
                            <Link to="/suitcase" className="main-btn">Add to suitcase</Link>
                        </Col>
                        <Col xl={4}>
                            <h5>Documents</h5>
                            <ul>
                                <li>
                                    <a href="" download>
                                        <FilePdf />
                                        Conditions of Hospitality
                                    </a>
                                </li>
                                <li>
                                    <a href="" download>
                                        <FilePdf />
                                        Fire Rules of the Hotel
                                    </a>
                                </li>
                                <li>
                                    <a href="" download>
                                        <FilePdf />
                                        Seasonal Room Rates
                                    </a>
                                </li>
                            </ul>
                        </Col>

                    </Row>

                </div>
            </Container>
            <Footer />
        </div>
    )
}