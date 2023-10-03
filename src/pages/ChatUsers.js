import React from "react"
import { Card, Image } from "react-bootstrap"
import { Circle, PersonOutlined, Search } from "@mui/icons-material"

import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css"

const ChartUsers = () => {
  return (
    <>
      <Card className="chat-left-sidebar">
        <Card.Body className="p-0">
          <div className="p-3 px-3 bg-light">
            <div className="d-flex align-items-start">
              <div className="flex-shrink-0 align-self-center me-3">
                <Image
                  src="./images/users/user-9.jpg"
                  className="avatar rounded-circle"
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
                    Chats
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
    </>
  )
}

export default ChartUsers
