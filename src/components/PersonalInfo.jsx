import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col } from 'react-bootstrap';

function PersonalInfo({id, name, birth, eyes}) {
    return ( 
      <Col className='col-md-4 mb-3'>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">ID: {id}</Card.Subtitle>
            <ListGroup variant="flush">
            <ListGroup.Item>{birth}</ListGroup.Item>
            <ListGroup.Item>{eyes}</ListGroup.Item>
          </ListGroup>
          </Card.Body>
        </Card>
      </Col>
     );
}

export default PersonalInfo;