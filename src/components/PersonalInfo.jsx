import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Button} from 'react-bootstrap';
import RatingBar from '/src/components/RatingBar';
import { useContext } from 'react';
import AppContext from '../data/AppContext';
import { redirect } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';

function PersonalInfo({id, name, birth, eyes, rating}) {
  
    const context = useContext(AppContext);
    const dispatch = context.dispatch;
    return ( 

      <>
        <Col className='col-md-4 mb-3'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">ID: {id}</Card.Subtitle>
              <ListGroup variant="flush">
              <ListGroup.Item>Data urodzenia: {birth}</ListGroup.Item>
              <ListGroup.Item>Kolor oczu: {eyes}</ListGroup.Item>
              <ListGroup.Item><RatingBar rate={rating} /></ListGroup.Item>
            </ListGroup>
            <Button variant="primary" className="ms-1" /*onClick={ () => navigate(`/lab4/edit/${id}` ) }*/>
             Edit
            </Button>
            <Button variant="danger" className="ms-1"
            onClick={() => {
              dispatch({
                      type: "delete",
                      id: id
                          });
                      }
               } 
            >
              Delete
            </Button>
            <Button variant="success" className="ms-1" 
            //onClick={(e) => setRate((rate + 1) % 11)}
            onClick={e => dispatch({
              type: "rate",
              id: id,
              rating: (parseInt(rating) + 1) % 11
            })}
            >
            Rate
            </Button>
            </Card.Body>
          </Card>
        </Col>
      </>
     );
}

export default PersonalInfo;