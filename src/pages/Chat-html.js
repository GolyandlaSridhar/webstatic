import { Circle, PersonOutlined, Search, Send } from "@mui/icons-material"
import React from "react"
import { Card, Image, Row, Col } from "react-bootstrap"

import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css"

const Chat = () => {
  return (
    <>
      <div className="d-lg-flex mt-3 mb-3">
        <Card className="chat-leftsidebar">
          <Card.Body className="p-0">
            <div className="p-3 px-3 bg-light">
              <div className="d-flex align-items-start">
                <div className="flex-shrink-0 align-self-center me-3">
                  <Image
                    src="./images/users/user-9.jpg"
                    className="avatar-xs rounded-circle"
                    alt="avatar"
                  />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1">
                    <a href="{}" className="text-reset">
                      Marcus
                      <Circle className="chat-online-user text-success" />
                    </a>
                  </h6>
                  <p className="text-muted mb-0">Available</p>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="search-box chat-search-box">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control rounded"
                    placeholder="Search..."
                  />
                  <Search className="search-icon" />
                </div>
              </div>
            </div>
            <div>
              <div className="border-top">
                <div className="chat-message-list">
                  <SimpleBar
                    data-simplebar-force-visible
                    style={{ height: "400px" }}
                  >
                    <h6 className="font-size-14 text-uppercase mt-4 mb-4">
                      <PersonOutlined className="ms-3" />
                      Contacts
                    </h6>

                    <ul className="list-unstyled chat-list mb-0">
                      <li className="active">
                        <a href="{}">
                          <div className="d-flex align-items-start">
                            <div className="flex-shrink-0 align-self-center me-3">
                              <div className="user-img online">
                                <Image
                                  src="./images/users/user-2.jpg"
                                  className="rounded-circle avatar-xs"
                                  alt="avatar"
                                />
                                <span className="user-status"></span>
                              </div>
                            </div>

                            <div className="flex-grow-1 overflow-hidden">
                              <h6 className="text-truncate font-size-14 mb-1">
                                John Howard
                              </h6>
                              <p className="text-truncate font-size-13 mb-0">
                                Hey! there I'm available
                              </p>
                            </div>
                            <div className="font-size-11">02 min</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="{}">
                          <div className="d-flex align-items-start">
                            <div className="flex-shrink-0 align-self-center me-3">
                              <div className="user-img online">
                                <div className="avatar-xs align-self-center">
                                  <span className="avatar-title rounded-circle bg-primary">
                                    G
                                  </span>
                                </div>
                                <span className="user-status"></span>
                              </div>
                            </div>

                            <div className="flex-grow-1 overflow-hidden">
                              <h6 className="text-truncate font-size-14 mb-1">
                                Galen Rizo
                              </h6>
                              <p className="text-truncate font-size-13 mb-0">
                                I've finished it! See you so
                              </p>
                            </div>
                            <div className="font-size-11">10 min</div>
                            <div className="unread-message">
                              <span className="badge bg-soft text-danger bg-danger rounded-pill">
                                01
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="{}">
                          <div className="d-flex align-items-start">
                            <div className="flex-shrink-0 align-self-center me-3">
                              <div className="user-img away">
                                <Image
                                  src="./images/users/user-3.jpg"
                                  className="rounded-circle avatar-xs"
                                  alt="avatar"
                                />
                                <span className="user-status"></span>
                              </div>
                            </div>

                            <div className="flex-grow-1 overflow-hidden">
                              <h6 className="text-truncate font-size-14 mb-1">
                                Bernard Spencer
                              </h6>
                              <p className="text-truncate font-size-13 mb-0">
                                This theme is awesome!
                              </p>
                            </div>
                            <div className="font-size-11">22 min</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="{}">
                          <div className="d-flex align-items-start">
                            <div className="flex-shrink-0 align-self-center me-3">
                              <div className="user-img">
                                <Image
                                  src="./images/users/user-4.jpg"
                                  className="rounded-circle avatar-xs"
                                  alt="avatar"
                                />
                                <span className="user-status"></span>
                              </div>
                            </div>

                            <div className="flex-grow-1 overflow-hidden">
                              <h6 className="text-truncate font-size-14 mb-1">
                                Annie Holder
                              </h6>
                              <p className="text-truncate font-size-13 mb-0">
                                Nice to meet you
                              </p>
                            </div>
                            <div className="font-size-11">01 Hr</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="{}">
                          <div className="d-flex align-items-start">
                            <div className="flex-shrink-0 align-self-center me-3">
                              <div className="user-img online">
                                <div className="avatar-xs align-self-center">
                                  <span className="avatar-title rounded-circle bg-success">
                                    V
                                  </span>
                                </div>
                                <span className="user-status"></span>
                              </div>
                            </div>

                            <div className="flex-grow-1 overflow-hidden">
                              <h6 className="text-truncate font-size-14 mb-1">
                                Vernon Smith
                              </h6>
                              <p className="text-truncate font-size-13 mb-0">
                                Wow that's great
                              </p>
                            </div>
                            <div className="font-size-11">04 Hrs</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="{}">
                          <div className="d-flex align-items-start">
                            <div className="flex-shrink-0 align-self-center me-3">
                              <div className="user-img">
                                <Image
                                  src="./images/users/user-8.jpg"
                                  className="rounded-circle avatar-xs"
                                  alt="avatar"
                                />
                                <span className="user-status"></span>
                              </div>
                            </div>

                            <div className="flex-grow-1 overflow-hidden">
                              <h6 className="text-truncate font-size-14 mb-1">
                                Annie Holder
                              </h6>
                              <p className="text-truncate font-size-13 font-size-13 mb-0">
                                Nice to meet you
                              </p>
                            </div>
                            <div className="font-size-11">01 Hr</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="{}">
                          <div className="d-flex align-items-start">
                            <div className="flex-shrink-0 align-self-center me-3">
                              <div className="user-img">
                                <Image
                                  src="./images/users/user-7.jpg"
                                  className="rounded-circle avatar-xs"
                                  alt="avatar"
                                />
                                <span className="user-status"></span>
                              </div>
                            </div>

                            <div className="flex-grow-1 overflow-hidden">
                              <h6 className="text-truncate font-size-14 mb-1">
                                Vernon Smith
                              </h6>
                              <p className="text-truncate font-size-13 mb-0">
                                Wow that's great
                              </p>
                            </div>
                            <div className="font-size-11">04 Hrs</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="{}">
                          <div className="d-flex align-items-start">
                            <div className="flex-shrink-0 align-self-center me-3">
                              <div className="user-img online">
                                <Image
                                  src="./images/users/user-3.jpg"
                                  className="rounded-circle avatar-xs"
                                  alt="avatar"
                                />
                                <span className="user-status"></span>
                              </div>
                            </div>

                            <div className="flex-grow-1 overflow-hidden">
                              <h6 className="text-truncate font-size-14 mb-1">
                                Brandon Miles
                              </h6>
                              <p className="text-truncate font-size-13 mb-0">
                                Hi...!
                              </p>
                            </div>
                            <div className="font-size-11">22 min</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="{}">
                          <div className="d-flex align-items-start">
                            <div className="flex-shrink-0 align-self-center me-3">
                              <div className="user-img away">
                                <Image
                                  src="./images/users/user-8.jpg"
                                  className="rounded-circle avatar-xs"
                                  alt="avatar"
                                />
                                <span className="user-status"></span>
                              </div>
                            </div>

                            <div className="flex-grow-1 overflow-hidden">
                              <h6 className="text-truncate font-size-14 mb-1">
                                Emily Law
                              </h6>
                              <p className="text-truncate font-size-13 mb-0">
                                Good Morning!
                              </p>
                            </div>
                            <div className="font-size-11">22 min</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="{}">
                          <div className="d-flex align-items-start">
                            <div className="flex-shrink-0 align-self-center me-3">
                              <div className="user-img">
                                <Image
                                  src="./images/users/user-1.jpg"
                                  className="rounded-circle avatar-xs"
                                  alt="avatar"
                                />
                                <span className="user-status"></span>
                              </div>
                            </div>

                            <div className="flex-grow-1 overflow-hidden">
                              <h6 className="text-truncate font-size-14 mb-1">
                                Jordan Thorpe
                              </h6>
                              <p className="text-truncate font-size-13 mb-0">
                                This theme is awesome!
                              </p>
                            </div>
                            <div className="font-size-11">22 min</div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </SimpleBar>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>

        <div className="w-100 user-chat mt-4 mt-sm-0 ms-lg-1">
          <Card>
            <div className="p-3 px-lg-4 border-bottom">
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
      </div>
    </>
    //   https://preview.pichforest.com/samply/layouts/apps-chat.html
    // https://themesbrand.com/borex/layouts/index.html
  )
}

export default Chat
