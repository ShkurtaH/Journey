import { Link } from "react-router-dom";
import { Card, Figure } from "react-bootstrap";


export default function CountyList(props) {
    return (
        <Card className="mb-5">
            <Link to={`/get-to-know-the-county/${props.link}`} className="card-link">
                <Figure className="card-img">
                    <Card.Img variant="top" src={props.name} alt="Beaches" />
                    <Card.Body>
                        <Card.Text>
                            {props.name}
                        </Card.Text>
                    </Card.Body>
                </Figure>
            </Link>
        </Card>
    );
}