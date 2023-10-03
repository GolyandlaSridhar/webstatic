import React, { Suspense } from "react"
import { Spinner, Container, Row, Col } from "react-bootstrap"
import { Outlet } from "react-router-dom"

const InnerContent = () => {
  return (
    <div className="inner-content h-100">
      <Suspense fallback={<Spinner color="primary" />}>
        <Container fluid>
          <Row>
            <Col xl={12}>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </Suspense>
    </div>
  )
}

export default InnerContent
