import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import AvatarNew from "../../Assets/avatarNew.gif"
import Home3 from "./Home3";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{marginRight:"100px" }} className="heading">
                <p>Welcome To <span style={{fontSize:"60px"}}><b>MindMender</b></span></p>
                <p style={{fontSize:"30px"}}>Your Path to Mental Wellness</p>
                {/* <p ></p> */}
                {/* <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span> */}
              </h1>

              <h1 className="heading-name">
                {/* <p style={{fontSize:"30px", marginLeft:"10px"}}>Empowering Academic Excellence</p> */}
                {/* <strong className="main-name"> Streamlined Resource</strong> */}
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                 <strong className="main-name" style={{fontSize:"48px", fontWeight:"bold"}}> JOIN MINDMENDER</strong>
                 <Type />
              </div>
              <div className="ComingBtn" style={{ padding: 50, paddingTop:0, textAlign: "left" }}>
                  <button className="C-btn">Register Now</button>
                 </div>
            </Col>

            

            {/* <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={Avatar}
                alt="home pic"
                className="img-fluid"
                style={{ height: "450px", width:"500px", border: '4px solid white', borderRadius: '50%'}}
              />
              <VideoPlayer />
            </Col> */}
            
            {/* <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={Animator}
                alt="home pic"
                className="img-fluid"
                style={{ height: "200px", width:"500px", border: '4px solid white', borderRadius: '50%'}}
              />
              <VideoPlayer />
            </Col> */}

             
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={AvatarNew}
                alt="home pic"
                className="img-fluid"
                style={{ height: "500px", width:"500px", border: '5px solid white', borderRadius: '50%'}}
              />
              {/* <VideoPlayer /> */}
            </Col>

          </Row>
        </Container>
      </Container>
      <Home2 />
      <Home3 />
      {/* <Info /> */}
      {/* <Work /> */}
    </section>
  );
}

export default Home;
