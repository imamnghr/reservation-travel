import react from "react";
import { Container, Col, Row } from "react-bootstrap";

const Homepage = () => {
  return (
    <div
      className="content"
      style={{ backgroundImage: "url('../../../assets/img/bg-img.jpg')" }}
    >
      <img src={require("../../../assets/icon/iconbali.png")} alt="bali" />
      <h1>a Better way to</h1>
      <h2>travel to bali</h2>
    </div>
  );
};

export default Homepage;
