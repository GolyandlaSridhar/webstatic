import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Card, Image } from "react-bootstrap"
import { Circle, Search } from "@mui/icons-material"

import { getRandomColor, createImageFromInitials } from "../utils/index"

import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css"

import { getConversationUsersList } from "../actions/chats"
import { event } from "jquery"

const ChatUsers = () => {
  const conversations = useSelector((state) => state.chats)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getConversationUsersList())
  }, [dispatch])

  const { user: currentUser } = useSelector((state) => state.auth)

  var imgSrc = ""

  const getConversationUserMessages = (e) => {
    e.preventDefault()
    const receiver = e.target.data("receiver")
    const conversationId = e.target.getAttribute("data-id")

    console.log(
      "Receiver : " + receiver + " ConversationId : " + conversationId
    )
  }

  return (
    <>
      <Card className="chat-left-sidebar">
        <Card.Body className="p-0">
          <div className="p-3 px-3 bg-light">
            <div className="d-flex align-items-start">
              <div className="flex-shrink-0 align-self-center me-3">
                <Image
                  src={
                    imgSrc.length <= 0
                      ? createImageFromInitials(
                          500,
                          `${currentUser.firstname} ${currentUser.lastname}`,
                          getRandomColor()
                        )
                      : imgSrc
                  }
                  className="rounded-circle avatar-xs"
                  alt="avatar"
                />
              </div>
              <div className="flex-grow-1">
                <h6 className="mb-1">
                  <a className="text-reset">
                    {currentUser.username}
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
            <div className="">
              <div className="chat-message-list">
                <SimpleBar
                  data-simplebar-force-visible
                  style={{ height: "400px" }}
                >
                  <ul className="list-unstyled chat-list mb-0">
                    {conversations &&
                      conversations.map((conversation, index) => (
                        <li key={conversation.conversationId}>
                          <a
                            href="{}"
                            data-id={conversation.conversationId}
                            data-receiver={conversation.user.receiverId}
                            onClick={getConversationUserMessages}
                          >
                            <div className="d-flex align-items-start">
                              <div className="flex-shrink-0 align-self-center me-3">
                                <div className="user-img online">
                                  <Image
                                    src={
                                      imgSrc.length <= 0
                                        ? createImageFromInitials(
                                            500,
                                            `${conversation.user.firstname} ${conversation.user.lastname}`,
                                            getRandomColor()
                                          )
                                        : imgSrc
                                    }
                                    className="rounded-circle avatar-xs"
                                    alt="avatar"
                                  />
                                </div>
                              </div>

                              <div className="flex-grow-1 overflow-hidden">
                                <h6 className="text-truncate font-size-14 mb-1">
                                  {conversation.user.username}
                                </h6>
                                <p className="text-truncate font-size-13 mb-0">
                                  Hey! there I'm available
                                </p>
                              </div>
                              <div className="font-size-11">02 min</div>
                            </div>
                          </a>
                        </li>
                      ))}
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

export default ChatUsers
