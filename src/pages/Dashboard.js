import React from "react"
import { Col, Row } from "react-bootstrap"
import TutorialsList from "./TutorialsList"
import MessageList from "./MessageList"
import RecentUsers from "./RecentUsers"

const Dashboard = () => {
  return (
    <>
      <Row className="p-3">
        <Col xl={6}>
          <TutorialsList />
        </Col>
        <Col xl={6}>
          <MessageList />
        </Col>
      </Row>
      <Row className="p-3">
        <Col xl={12}>
          <RecentUsers />
        </Col>
      </Row>
    </>
  )
}

export default Dashboard
