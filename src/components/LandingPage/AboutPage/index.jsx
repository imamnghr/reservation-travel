import { Container, Col, Row } from "react-bootstrap";

const AboutPage = () => {
  return (
    <div
      className="about-content"
      style={{
        backgroundImage: `url(${require("../../../assets/img/bg-img2.png")}`,
      }}
    >
      <div className="bg-color">
        <h1 className="title-about">About Us</h1>
        <p className="desc-about">
          More than 10 years, Orca Travel Services has grow at a steady pace and
          become one of Indonesia's leading travel agent offering a complete
          travel solution for both leisure and business travels. The company has
          over 500 staff within 24 branches across the country
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
