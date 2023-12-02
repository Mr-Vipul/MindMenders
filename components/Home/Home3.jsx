import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import Home from "./Home";

const Home3 = () => {
  return (
    <Container style={{height:"90%"}}>
    <div>
      <Row>
        <Col>
          <Card style={{ width: "100%" }}>
            {/* <Card.Img variant="top" src="https://via.placeholder.com/150" /> */}
            <Card.Body>
              <Card.Title>Ai ChatBot</Card.Title>
              <Card.Text>
              At MindMinders, we believe in empowering individuals on their mental health journey. Our emergence AI Chatbot is dedicated to providing a safe space and personalized support for those navigating challenges like depression, anxiety, OCD, and more.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "100%" }}>
            {/* <Card.Img variant="top" src="https://via.placeholder.com/150" /> */}
            <Card.Body>
              <Card.Title>Scheduled Sessions</Card.Title>
              <Card.Text>
              MindMinders' interactive chatbot isn't just a listener; it's a companion in your mental wellness journey. By offering personalized homework assignments and customizable schedules, our chatbot empowers individuals to actively engage in their healing process.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "100%" }}>
            {/* <Card.Img variant="top" src="https://via.placeholder.com/150" /> */}
            <Card.Body>
              <Card.Title>Community</Card.Title>
              <Card.Text>
              This space is designed for individuals to connect, share experiences, and support each other on their paths to mental wellness. Engage in discussions, find solidarity, and discover the strength in unity as you navigate challenges together.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </div>
    </Container>
  );
};

export default Home3;
