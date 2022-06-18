import { Col, Container, Row, Card } from "react-bootstrap";
import { Calendar, CalendarDate, Newspaper, Person } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./News.css";
import { useEffect, useState } from "react";
import Header from "../layout/Header";

function News() {
    const [newsList, fetchNewsList] = useState([]);

    const getData = () => {
        fetch('http://localhost:5296/api/News')
            .then((res) => res.json())
            .then((res) => {
                fetchNewsList(res)
            }).catch((error) => console.log('error', error))
    }
    useEffect(() => {
        getData()
    }, []);
    return (
        <div className="content my-100">
            <Container>
                <div className="text-center mb-5">
                    <span className="icon large">
                        <Newspaper />
                    </span>
                    <h1 className="main-title">Latest News</h1>
                </div>
                <Row>
                    {newsList.map(item => {
                        return (
                            <Col xl={4} className="item" key={item.NewsId}>
                                <Card>
                                    <div className="item-img-wrapper">
                                        <Card.Img variant="top" src="/assets/images/general/travel-essentials.jpeg" className="item-img" />
                                    </div>
                                    <Card.Body>
                                        <div className="d-flex justify-content-between post-info mb-3">
                                            <span><Calendar /> {item.DateOfPosting}</span>
                                            <span className="author"><Person />leandrraemini</span>
                                        </div>
                                        <Card.Title>
                                            <Link to="/news-detail" className="item-link">{item.NewsTitle}</Link>
                                        </Card.Title>
                                        <Card.Text>
                                            {item.NewsDescription}
                                        </Card.Text>
                                        <Link to="/news-detail" className="main-btn">Read More</Link>
                                    </Card.Body>

                                </Card>
                            </Col>
                        );
                    })}


                </Row>
                <div className="text-center mt-5">
                    <Link to="/news" className="main-btn">More News</Link>
                </div>
            </Container>
        </div>
    );
}
export default News;