import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl={12}>
          <div className="p-3">This is About Us page</div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
