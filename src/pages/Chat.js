import React from "react"
import { Row, Col } from "react-bootstrap"

import ChartUsers from "./ConversationUsresList"
import ChartBody from "./MessageBody"
import AllUsers from "./AllUsers"

const Chat = () => {
  return (
    <>
      <div className="mt-3 mb-3">
        <Row>
          <Col xl={3}>
            <ChartUsers />
          </Col>
          <Col xl={6}>
            <ChartBody />
          </Col>
          <Col xl={3}>
            <AllUsers />
          </Col>
        </Row>
      </div>
    </>
    //   https://preview.pichforest.com/samply/layouts/apps-chat.html
    // https://themesbrand.com/borex/layouts/index.html
  )
}

export default Chat
