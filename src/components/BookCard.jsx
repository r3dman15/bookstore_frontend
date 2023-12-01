import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function BookCard({authors, title, description, price, genre , availability , image_url}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{"price: "+ price}</ListGroup.Item>
                <ListGroup.Item>{"genre: "+ genre}</ListGroup.Item>
                <ListGroup.Item>{`author: ${authors[0].firstName} ${authors[0].lastName}`}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default BookCard;