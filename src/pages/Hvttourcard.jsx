import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import "../ComponentCss/Hvttourcard.css";
import tours from '../Data/data';

const Hvttourcard = () => {
  return (
    <section className="bg-light p-5 ">
        <div className="col-12 text-center">
              <h2 className="fw-bold fs-1">
                Our
                <span className="text- main-hover"> Destinations </span>
              </h2>
            </div>
    <Container className='mt-4 '>
      <Row>
        {tours.map((tour, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={tour.imgSrc} className="card-img-top"/>
              <Card.Body className="card-body">
                <Card.Title className="card-title text-center">{tour.title}</Card.Title>
                <Button variant="primary" className="mt-auto explore-btn ">EXPLORE</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </section>
  );
}

export default Hvttourcard;
