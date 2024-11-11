import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-dark text-white fixed-bottom">
            <Container>
                <Row className='justify-content-center p-2'>
                    <Col md={4}>
                      Jakub Cepielik 
                    </Col>
                    <Col md={4}>
                      jakub.cepielik@microsoft.wsei.edu.pl
                    </Col>
                    <Col md={4}>
                      <img src='src/assets/logo-wsei.png' alt="tttt" width='100px' height='40px'/>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;