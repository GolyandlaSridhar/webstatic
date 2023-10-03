import React, { useEffect, useState } from "react"
import { Circle, Send } from "@mui/icons-material"
import { Card, Image, Row, Col } from "react-bootstrap"

import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css"

import { getMessages } from "../actions/message"
import { useDispatch, useSelector } from "react-redux"

const ChartBody = () => {
  const [allUsersMessages, setAllUsersMessages] = useState(null)

  const messages = useSelector((state) => state.messages)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMessages("64e088e318cd0a17a13104e0"))
  }, [dispatch])

  return (
    <div className="w-100 user-chat mt-4 mt-sm-0">
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
            <SimpleBar data-simplebar-force-visible style={{ height: "400px" }}>
              <ul className="list-unstyled mb-0">
                <li className="chat-day-title">
                  <div className="title">Yesterday</div>
                </li>

                <li>
                  <div className="conversation-list d-flex">
                    <div className="chat-user-img online align-self-start">
                      <Image
                        src="./images/users/user-2.jpg"
                        className="rounded-circle avatar-xs"
                        alt="avatar"
                      />
                    </div>
                    <div className="text-wrap">
                      <div className="text-wrap-content">
                        <p className="mb-0">
                          Good morning !{" "}
                          <span className="d-inline-block font-size-12 text-muted ms-3">
                            10:00
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="right">
                  <div className="conversation-list d-flex">
                    <div className="chat-user-img online align-self-start order-3">
                      <Image
                        src="./images/users/user-4.jpg"
                        className="rounded-circle avatar-xs"
                        alt="avatar"
                      />
                    </div>
                    <div className="text-wrap">
                      <div className="text-wrap-content">
                        <p className="mb-0">
                          <span className="d-inline-block font-size-12 text-muted me-3">
                            10:00
                          </span>
                          Good morning, How are you? What about our next
                          meeting?{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="conversation-list d-flex">
                    <div className="chat-user-img online align-self-start">
                      <Image
                        src="./images/users/user-2.jpg"
                        className="rounded-circle avatar-xs"
                        alt="avatar"
                      />
                    </div>
                    <div>
                      <div className="text-wrap">
                        <div className="text-wrap-content">
                          <p className="mb-0">
                            Yeah everything is fine
                            <span className="d-inline-block font-size-12 text-muted ms-3">
                              10:04
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="text-wrap">
                        <div className="text-wrap-content">
                          <p className="mb-0">
                            Next meeting tomorrow 10.00AM
                            <span className="d-inline-block font-size-12 text-muted ms-3">
                              10:06
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="right">
                  <div className="conversation-list d-flex">
                    <div className="chat-user-img online align-self-start order-3">
                      <Image
                        src="./images/users/user-4.jpg"
                        className="rounded-circle avatar-xs"
                        alt="avatar"
                      />
                    </div>
                    <div className="text-wrap">
                      <div className="text-wrap-content">
                        <p className="mb-0">
                          <span className="d-inline-block font-size-12 text-muted me-3">
                            10:06
                          </span>
                          Wow that's great{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="chat-day-title">
                  <div className="title">Today</div>
                </li>

                <li>
                  <div className="conversation-list d-flex">
                    <div className="chat-user-img online align-self-start">
                      <Image
                        src="./images/users/user-2.jpg"
                        className="rounded-circle avatar-xs"
                        alt="avatar"
                      />
                    </div>
                    <div className="text-wrap">
                      <div className="text-wrap-content">
                        <p className="mb-0">
                          img-1.jpg & img-2.jpg images for a New Projects{" "}
                          <span className="d-inline-block font-size-12 text-muted ms-3">
                            10:06
                          </span>
                        </p>

                        <ul className="list-inline message-img mt-3 mb-0">
                          <li className="list-inline-item message-img-list m-0">
                            <a className="d-inline-block" href="{}">
                              <Image
                                src="./images/projects/project-3.jpg"
                                alt="avatar"
                                className="rounded img-thumbnail"
                              />
                            </a>
                          </li>

                          <li className="list-inline-item message-img-list m-0">
                            <a className="d-inline-block" href="{}">
                              <Image
                                src="./images/projects/project-5.jpg"
                                alt="avatar"
                                className="rounded img-thumbnail"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
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
    </div>
  )
}

export default ChartBody
