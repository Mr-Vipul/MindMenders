import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import laptopImg from "../../Assets/about.png";
import Avatar from "../../Assets/Avator.gif";
import Tilt from "react-parallax-tilt";
import chatbot from "../../Assets/Chat-bot.gif"
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Why Choose <span className="purple">Health</span>
            </h1>

            <p className="home-about-body">Discover the reasons to choose MindMender for your healthcare needs. Experience expert Ai base care, convenience, and personalized solutions, making your well-being our top priority. Join us on a journey to better health and a happier life.

            <br />
              <br />Best Trained Ai bot
              <br />Emergency Care
              <br />24/7 Support Live Chat,
              <br />Enrollment Easy and Quick
              <i><b className="purple"></b></i>
              <br />
              <br />
              {/* My field of Interest's are building new &nbsp; */}
              <i>
                {/* <b className="purple">Web Technologies and Products </b> and */}
                {/* also in areas related to{" "} */}
                <b className="purple">
                  {/* Blockchain. */}
                </b>
              </i>
              <br />
              <br />
              {/* Whenever possible, I also apply my passion for developing products */}
              {/* with <b className="purple">Node.js</b> and */}
              <i>
                <b className="purple">
                  {" "}
                  {/* Modern Javascript Library and Frameworks */}
                </b>
              </i>
              {/* &nbsp; like */}
              <i>
                <b className="purple"></b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <img src={chatbot} alt="about" className="img-fluid" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
