import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const DeleteAllTutorials = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl={12}>
          <div className="p-3">Delete all tutorials</div>
        </Col>
      </Row>
    </Container>
  )
}

export default DeleteAllTutorials
