import React from 'react';
import { Card, Button,  } from 'react-bootstrap';
import "../ComponentCss/Hvttourcard.css";
import tours from '../Data/data';

const Hvttourcard = () => {
  return (
    <section className="bg-light  mt-4  p-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2 className="fw-bold fs-1">
              Our 
              <span className="main-hover"> Destinations </span>
            </h2>
          </div>
        </div>
        <div className="row">
          {tours.map((tour, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
              <Card className="h-100">
                <Card.Img variant="top" src={tour.imgSrc} className="card-img-top" />
                <Card.Body className="card-body d-flex flex-column">
                  <Card.Title className="card-title text-center">{tour.title}</Card.Title>
                  <Button variant="primary" className="mt-auto explore-btn " >EXPLORE</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hvttourcard;
