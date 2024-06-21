import React, { useState } from 'react';
import { Card, Button, Modal, Row, Col, Form } from 'react-bootstrap';
import '../ComponentCss/PLanCard.css';

const PlanCard = ({ plan }) => {
  const [showBookNow, setShowBookNow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleCloseBookNow = () => setShowBookNow(false);
  const handleShowBookNow = () => setShowBookNow(true);

  const handleCloseDetails = () => setShowDetails(false);
  const handleShowDetails = () => setShowDetails(true);
  console.log(plan);

  const itinerary = [
    { day: "Day 01", location: "Mathura", description: "Description" },
    { day: "Day 02", location: "Vrindavan", description: "ADescription" },
    { day: "Day 03", location: "Nandgaon", description: "Description" },
    { day: "Day 04", location: "Barsana", description: "Description" },
    { day: "Day 05", location: "Govardhan", description: "Description" },
    { day: "Day 06", location: "Dauji", description: "Description" },
    { day: "Day 07", location: "Gokul", description: "Description" },

  ];

  return (
    <div className="plan-card">
      <Card>
        <Row noGutters>
          <Col md={4}>
            <Card.Img src="/images/des9.jpeg" alt="Plan image" />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{plan.title}</Card.Title>
              <Card.Text>{plan.description}</Card.Text>
            </Card.Body>
              <Button  onClick={handleShowDetails} className="mr-2 btn-orange">View Details</Button>
              <Button className='btn-black' onClick={handleShowBookNow}>Book Now</Button>
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
          <hr />
          <h5>Recommended Itinerary</h5>
          <div className="itinerary">
            {itinerary.map((item, index) => (
              <div key={index} className="itinerary-item mb-4">
                <Row>
                  <Col md={2} className="itinerary-day">
                    <strong>{item.day}</strong>
                    <div className="itinerary-point"></div>
                  </Col>
                  <Col md={10} className="itinerary-content">
                    <h6>{item.location}</h6>
                    <p>{item.description}</p>
                  </Col>
                </Row>
              </div>
            ))}
            <div className="itinerary-line"></div>
          </div>
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
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control as="select">
                  <option>- Select -</option>
                  <option>Mr.</option>
                  <option>Mrs.</option>
                  <option>Ms.</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formMobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" placeholder="Enter Mobile" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDateOfTour">
              <Form.Label>Date of Tour</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formNoOfAdults">
                <Form.Label>No of Adults</Form.Label>
                <Form.Control as="select">
                  <option>- Select -</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>

              {/* <Form.Group as={Col} controlId="formChildren">
                <Form.Label>Children</Form.Label>
                <Form.Control as="select">
                  <option>Children (5 - 12 Yrs)</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group> */}
            </Row>

            <Form.Group className="mb-3" controlId="formCategoryOfHotels">
              <Form.Label>Category of Hotels Needed</Form.Label>
              <Form.Control as="select">
                <option>- Select -</option>
                <option>1 Star</option>
                <option>2 Star</option>
                <option>3 Star</option>
                <option>4 Star</option>
                <option>5 Star</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Message(Optional)" />
            </Form.Group>

            <Form.Group controlId="formConsent">
              <Form.Check 
                type="checkbox" 
                label="I authorize Swan Tours & its representatives to Call, SMS & Email me with reference to my Travel Enquiry. This consent will override any registration for DNC / NDNC." 
              />
            </Form.Group>
          </Form>
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
