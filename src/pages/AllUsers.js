import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { PersonOutlined } from "@mui/icons-material"
import { Card, Image } from "react-bootstrap"

import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css"

import { getAllUsers } from "../actions/users"

import { getRandomColor, createImageFromInitials } from "../utils/index"

const AllUsers = () => {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  var imgSrc = ""

  const createConversation = () => {}

  return (
    <>
      <Card className="chat-left-sidebar">
        <Card.Body className="p-0">
          <div>
            <div className="chat-users-list">
              <SimpleBar
                data-simplebar-force-visible
                style={{ height: "550px" }}
              >
                <h6 className="font-size-14 text-uppercase mt-4 mb-4">
                  <PersonOutlined className="ms-3" />
                  Contacts
                </h6>

                <ul className="list-unstyled chat-list mb-0">
                  {users &&
                    users.map((user, index) => (
                      <li key={index}>
                        <a
                          href="{}"
                          onClick={createConversation}
                          data-receiver={user._id}
                        >
                          <div className="d-flex align-items-start">
                            <div className="flex-shrink-0 align-self-center me-3">
                              <div className="user-img">
                                <Image
                                  src={
                                    imgSrc.length <= 0
                                      ? createImageFromInitials(
                                          500,
                                          `${user.firstname} ${user.lastname}`,
                                          getRandomColor()
                                        )
                                      : imgSrc
                                  }
                                  className="rounded-circle avatar-xs"
                                  alt="avatar"
                                />
                              </div>
                            </div>

                            <div className="flex-grow-1 align-self-center overflow-hidden">
                              <h6 className="text-truncate font-size-14 mb-1">
                                {user.username}
                              </h6>
                            </div>
                          </div>
                        </a>
                      </li>
                    ))}
                </ul>
              </SimpleBar>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default AllUsers
