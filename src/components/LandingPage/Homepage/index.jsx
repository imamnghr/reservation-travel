import react from "react";
import { Container, Col, Row } from "react-bootstrap";

const Homepage = () => {
  return (
    <div
      className="content"
      style={{
        backgroundImage: `url(${require("../../../assets/img/bg-img1.png")}`,
      }}
    >
      <div className="bg-color">
        <img src={require("../../../assets/icon/iconBali.png")} alt="bali" />
        <h1 className="title">a Better way to</h1>
        <h2>travel to bali</h2>
        <p className="desc">Cheapest and Easier</p>
        <Row>
          <Col>
            <button className="aboutus"> about us </button>
          </Col>
          <Col>
            <button className="reservation">reservation</button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Homepage;
