import React from "react"
import { Col, Image, Row, Card } from "react-bootstrap"

const ViewAllNotifications = () => {
  return (
    <Row className="p-3">
      <Col xl={8}>
        <Card className="mb-2">
          <Card.Body>
            <Row className="align-items-center">
              <div className="col-sm-4">
                <div className="d-flex align-items-start">
                  <Image
                    className="d-flex align-self-center me-3 rounded-circle"
                    src="./images/users/user-1.jpg"
                    height="64"
                  />
                  <div className="w-100">
                    <h4 className="mt-0 mb-2 font-16">Amazon Inc.</h4>
                    <p className="mb-1">
                      <b>Location:</b> Seattle, Washington
                    </p>
                    <p className="mb-0">
                      <b>Category:</b> Ecommerce
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <p className="mb-1 mt-3 mt-sm-0">
                  <i className="mdi mdi-email me-1"></i> collier@jourrapide.com
                </p>
                <p className="mb-0">
                  <i className="mdi mdi-phone-classNameic me-1"></i>{" "}
                  828-216-2190
                </p>
              </div>
              <div className="col-sm-2">
                <div className="text-center mt-3 mt-sm-0">
                  <div className="badge font-14 bg-soft-info text-info p-1">
                    Hot
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="text-sm-end">
                  <a href="{}" className="action-icon">
                    {" "}
                    <i className="mdi mdi-square-edit-outline"></i>
                  </a>
                  <a href="{}" className="action-icon">
                    {" "}
                    <i className="mdi mdi-delete"></i>
                  </a>
                </div>
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={4}>Sridhar</Col>
    </Row>
  )
}

export default ViewAllNotifications
