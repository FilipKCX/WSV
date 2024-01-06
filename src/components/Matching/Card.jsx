import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import './Card.css';

function KitchenSinkExample() {
    return (
        <div className="mt-4 text-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4" style={{ marginBottom: '20px' }}>

                        <Card style={{ width: '18rem' }}> {/* erste Karte */}
                            <Card.Img variant="top" src="holder.js/100px180?text=Image" cap className='card-img-top' />
                            <Card.Body>
                                <Card.Title>Name</Card.Title>
                                <Card.Text>
                                    Beschreibungen
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                            <ListGroup.Item>Studiengang:</ListGroup.Item>
                                <ListGroup.Item>Semesteranzahl:</ListGroup.Item>
                                <ListGroup.Item>Berufserfahrung:</ListGroup.Item>
                                <ListGroup.Item>zeitliche Verfügbarkeit:</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Button variant="primary" className='chat-button'>Chat starten!</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}> {/* zweite Karte */}
                            <Card.Img variant="top" src="holder.js/100px180?text=Image" cap className='card-img-top' />
                            <Card.Body>
                                <Card.Title>Name</Card.Title>
                                <Card.Text>
                                    Beschreibungen
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                            <ListGroup.Item>Studiengang:</ListGroup.Item>
                                <ListGroup.Item>Semesteranzahl:</ListGroup.Item>
                                <ListGroup.Item>Berufserfahrung:</ListGroup.Item>
                                <ListGroup.Item>zeitliche Verfügbarkeit:</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Button variant="primary" className='chat-button'>Chat starten!</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">

                        <Card style={{ width: '18rem' }}> {/* dritte Karte */}
                            <Card.Img variant="top" src="holder.js/100px180?text=Image" cap className='card-img-top' />
                            <Card.Body>
                                <Card.Title>Name</Card.Title>
                                <Card.Text>
                                    Beschreibungen
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Studiengang:</ListGroup.Item>
                                <ListGroup.Item>Semesteranzahl:</ListGroup.Item>
                                <ListGroup.Item>Berufserfahrung:</ListGroup.Item>
                                <ListGroup.Item>zeitliche Verfügbarkeit:</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Button variant="primary" className='chat-button'>Chat starten!</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KitchenSinkExample;
