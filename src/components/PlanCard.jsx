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

  return (
    <>
      <Card className="mb-4 plan-card">
        <Card.Body>
          <Row>
            <Col md={4}>
              <Card.Img src={plan.images} alt={plan.title} className="plan-card-img" />
            </Col>
            <Col md={8}>
              <Card.Title>{plan.title}</Card.Title>
              <Card.Text>{plan.details}</Card.Text>
              <div className="card-buttons">
                <Button variant="primary" onClick={handleShowBookNow}>Book Now</Button>
                <Button variant="secondary" onClick={handleShowDetails} className="ml-2">Details</Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Modal show={showBookNow} onHide={handleCloseBookNow}>
        <Modal.Header closeButton>
          <Modal.Title>Book Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>Booking form or information goes here.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseBookNow}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDetails} onHide={handleCloseDetails}>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>More details about the plan go here.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetails}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PlanCard;
