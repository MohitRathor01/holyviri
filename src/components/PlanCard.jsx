import React from 'react';
import { Card } from 'react-bootstrap';
import '../ComponentCss/PLanCard.css';


const PlanCard = ({ plan }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{plan.title}</Card.Title>
        <Card.Text>{plan.details}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PlanCard;
