import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import '../pagesCss/HvtReview.css';

const HvtReview = () => {
  const testimonials = [
  {
    name: 'John Doe',
    text: 'This is a great service! Highly recommend to everyone.',
    imgSrc:  'images/men.jpg',
    designation: 'CEO, Company A'
  },
  {
    name: 'Jane Smith',
    text:'Amazing experience! Will definitely use again.',
    imgSrc:  'images/men.jpg',
    
    designation: 'Marketing Head, Company B'
  },
  {
    name: 'Mike Johnson',
    text: 'Very satisfied with the service provided.',
    imgSrc:  'images/men.jpg',
    designation: 'Product Manager, Company C'
  },
  {
    name: 'Emily Davis',
    text: 'Top-notch customer service and great value.',
    imgSrc: 'images/men.jpg',
    designation: 'Founder, Company D'
  },
  {
    name: 'William Brown',
    text: 'Exceeded my expectations in every way.',
    imgSrc:  'images/men.jpg',
    designation: 'CTO, Company E'
  }
];

return(
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h2 className="fw-bold">What Our 
            <span className="main-hover"> Clients Say </span> </h2>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={10}>
          <Carousel indicators={false} controls={true} interval={1000}>
            {testimonials.map((testimonial, index) => (
              <Carousel.Item key={index}>
                <Card className="h-100">
                  <Card.Body className="d-flex flex-column align-items-center">
                    <img
                      src={testimonial.imgSrc}
                      className="rounded-circle mb-3"
                      alt={testimonial.name}
                      style={{ width: '100px', height: '100px' }}
                    />
                    <Card.Text className="text-center">{testimonial.text}</Card.Text>
                    <Card.Title className="mt-3">{testimonial.name}</Card.Title>
                    <Card.Subtitle className="text-muted">{testimonial.designation}</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default HvtReview
