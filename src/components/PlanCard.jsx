import React, { useState } from 'react';
import { Card, Button, Modal, Row, Col } from 'react-bootstrap';
import '../ComponentCss/PLanCard.css';

const PlanCard = ({ plan }) => {
  const [showBookNow, setShowBookNow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleCloseBookNow = () => setShowBookNow(false);
  const handleShowBookNow = () => setShowBookNow(true);

  const handleCloseDetails = () => setShowDetails(false);
  const handleShowDetails = () => setShowDetails(true);
  console.log(plan)

  return (
    <div className="plan-card">
      <Card>
        <Row >
          <Col md={4}>
            <Card.Img variant="top" src="/images/des9.jpeg" alt="Plan image" />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{plan.title}</Card.Title>
              <Card.Text>{plan.description}</Card.Text>
            </Card.Body>
              <Button variant="primary" onClick={handleShowDetails}>View Details</Button>

              <Button variant="success" className="ms-4" onClick={handleShowBookNow}>Book Now</Button>
          </Col>
        </Row>
      </Card>

      <Modal show={showDetails} onHide={handleCloseDetails}>
        <Modal.Header closeButton>
          <Modal.Title>Plan Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <img src="/images/des9.jpeg" alt="Plan" style={{ width: '100%' }} />
            </Col>
            <Col>
              <h4>{plan.title}</h4>
              <p>{plan.description}</p>
              <p><strong>Price: </strong>{plan.price}</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetails}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showBookNow} onHide={handleCloseBookNow}>
        <Modal.Header closeButton>
          <Modal.Title>Book Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Booking details form goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseBookNow}>Close</Button>
          <Button variant="primary">Confirm Booking</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PlanCard;
