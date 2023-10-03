import { Send } from "@mui/icons-material"
import React from "react"
import { Card, Col, Image } from "react-bootstrap"
import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css"

const MessageList = () => {
  return (
    <>
      <Col lg={12}>
        <Card className="border shadow">
          <Card.Body>
            <h5 className="card-title">Chat</h5>
            <div className="text-muted card-subtitle">message your friends</div>
            <ul className="list-unstyled">
              <SimpleBar style={{ maxHeight: 300 }}>
                <li className="chat d-flex flex-row-reverse text-end mt-2">
                  <div className="p-2 mb-1 rounded bg-light-success">Hello</div>
                </li>
                <li className="chat d-flex gap-3 ms-auto mt-2">
                  <div>
                    <Image
                      src="./images/users/user-1.jpg"
                      className="rounded-circle"
                      width="40"
                    />
                  </div>
                  <div className="p-2 mb-1 rounded bg-light">Hi</div>
                </li>
                <li className="chat d-flex flex-row-reverse text-end mt-2">
                  <div></div>
                  <div className="p-2 mb-1 rounded bg-light-success">
                    Check out my profile
                  </div>
                </li>
                <li className="chat d-flex gap-3 ms-auto mt-2">
                  <div>
                    <Image
                      src="./images/users/user-1.jpg"
                      alt="KevHs's profile pic"
                      width="40"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="p-2 mb-1 rounded bg-light">
                    Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem
                    inceptos incidunt sed sed. Tempus wisi enim id, arcu sed
                    lectus aliquam, nulla vitae est bibendum molestie elit
                    risus.
                  </div>
                </li>
                <li className="chat d-flex flex-row-reverse text-end mt-2">
                  <div className="p-2 mb-1 rounded bg-light-success"> So</div>
                </li>
                <li className="chat d-flex flex-row-reverse text-end mt-2">
                  <div></div>
                  <div className="p-2 mb-1 rounded bg-light-success">
                    Chilltime is going to be an app for you to view videos with
                    friends
                  </div>
                </li>
                <li className="chat d-flex flex-row-reverse text-end mt-2">
                  <div className="p-2 mb-1 rounded bg-light-success">
                    You can sign-up now to try out our private beta!
                  </div>
                </li>
                <li className="chat d-flex gap-3 ms-auto mt-2">
                  <div>
                    <Image
                      src="./images/users/user-1.jpg"
                      alt="Alice Chen's profile pic"
                      width="40"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="p-2 mb-1 rounded bg-light">
                    Definitely! Sounds great!
                  </div>
                </li>
              </SimpleBar>
            </ul>
            <div className="border-top pt-4">
              <form className="">
                <div className="gx-0 row">
                  <div className="col-10">
                    <div className="input-field mt-0 mb-0">
                      <input
                        placeholder="Type and enter"
                        type="text"
                        className="form-control border-0"
                      />
                    </div>
                  </div>
                  <div className="text-end col-2">
                    <button
                      type="submit"
                      value="submit"
                      className="btn btn-primary"
                    >
                      <Send />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* 
                
                
                
                
                
                
                
              </SimpleBar>
            </ul>
            <div className="border-top pt-4">
              <form className="">
                <div className="gx-0 row">
                  <div className="col-10">
                    <div className="input-field mt-0 mb-0">
                      <input
                        placeholder="Type and enter"
                        type="text"
                        className="form-control border-0"
                      />
                    </div>
                  </div>
                  <div className="text-end col-2">
                    <button
                      type="submit"
                      value="submit"
                      className="btn btn-primary"
                    >
                      <Send />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default MessageList
