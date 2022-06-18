import { Container, Breadcrumb, Table, Button } from "react-bootstrap";
import { X } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import "./Suitcase.css";

export default function Suitcase() {
    return (
        <div className="page-wrapper">
            <Header />
            <div className="bg bg-dark-violet">
                <Container>
                    <Breadcrumb className="breadcrumbs without-banner">
                        <Link to="/">Home</Link>
                        <Link to="/places-to-stay">Places to Stay</Link>
                        <Link to="/places-to-stay/list">Hotels</Link>
                        <Link to="/" className="active">Double Room</Link>
                    </Breadcrumb>
                </Container>
            </div>

            <Container>
                <div className="content my-100">
                    <h1>My Wish List</h1>
                    <Table striped bordered hover className="custom-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Place</th>
                                <th>Price</th>
                                <th>Location</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><img src="/assets/images/general/hotel/room-5-1024x664.jpeg" alt="Hotel" title="Hotel" /></td>
                                <td>Hotel</td>
                                <td>39 $</td>
                                <td>Amsterdam</td>
                                <td>
                                    <Button>
                                        <X />
                                    </Button>
                                </td>
                            </tr>


                        </tbody>
                    </Table>
                </div>
            </Container>
            <Footer />
        </div>
    )
}