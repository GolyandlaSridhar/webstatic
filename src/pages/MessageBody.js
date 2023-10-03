import React, { useEffect } from "react"
import { Circle, Send } from "@mui/icons-material"
import { Card, Image, Row, Col } from "react-bootstrap"

import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css"

import { getUserMessages } from "../actions/message"
import { useDispatch, useSelector } from "react-redux"

import { getRandomColor, createImageFromInitials } from "../utils/index"
import { createDateInLocale } from "../utils/convertDate"

const ChartBody = () => {
  const messages = useSelector((state) => state.message)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserMessages())
  }, [dispatch])

  const { user: currentUser } = useSelector((state) => state.auth)

  var imgSrc = ""

  return (
    <div className="w-100 user-chat mt-4 mt-sm-0">
      {messages ? (
        <div className="fs-3 d-flex justify-content-center">
          Please select user to load the messages.
        </div>
      ) : (
        <Card>
          <div className="p-3 border-bottom">
            <Row>
              <Col md={4}>
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 me-3 ms-0">
                    <Image
                      src="./images/users/user-2.jpg"
                      className="rounded-circle avatar-xs"
                      alt="avatar"
                    />
                  </div>
                  <div className="flex-grow-1 overflow-hidden">
                    <h5 className="font-size-16 mb-0 text-truncate">
                      <a href="{}" className="text-reset user-profile-show">
                        John Howard
                      </a>
                      <Circle className="text-success align-middle font-size-10 ms-1" />
                    </h5>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className="">
            <div className="chat-conversation">
              <SimpleBar
                data-simplebar-force-visible
                style={{ height: "400px" }}
              >
                <ul className="list-unstyled mb-0">
                  {messages &&
                    messages.map((message, index) => (
                      <li
                        key={index}
                        className={`${
                          message.user.id === currentUser.id ? "right" : ""
                        }`}
                      >
                        <div className="conversation-list d-flex">
                          <div
                            className={`chat-user-img online align-self-start ${
                              message.user.id === currentUser.id
                                ? "order-3"
                                : ""
                            }`}
                          >
                            <Image
                              src={
                                imgSrc.length <= 0
                                  ? createImageFromInitials(
                                      500,
                                      `${message.user.firstname} ${message.user.lastname}`,
                                      getRandomColor()
                                    )
                                  : imgSrc
                              }
                              className="rounded-circle avatar-xs"
                              alt="avatar"
                            />
                          </div>
                          <div className="text-wrap">
                            <div className="text-wrap-content">
                              <p className="mb-0">
                                {message.message}
                                <span className="d-inline-block font-size-12 text-muted ms-3">
                                  {createDateInLocale(message.createdAt)}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </SimpleBar>
            </div>
          </div>

          <div className="p-3 chat-input-section">
            <div className="row">
              <div className="col">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control chat-input rounded"
                    placeholder="Enter Message..."
                  />
                </div>
              </div>

              <div className="col-auto">
                <button
                  type="submit"
                  className="btn btn-primary chat-send w-md waves-effect waves-light font-size-12"
                >
                  <span className="d-none d-sm-inline-block me-2">Send</span>{" "}
                  <Send className="float-end font-size-14" />
                </button>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}

export default ChartBody
