import React, { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, Link } from "react-router-dom"
import {
  NotificationsNoneOutlined,
  Person,
  Search,
  Settings,
  Logout,
} from "@mui/icons-material"
import {
  Dropdown,
  Form,
  Image,
  InputGroup,
  ListGroup,
  Badge,
} from "react-bootstrap"
import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css"

import { logout } from "../actions/auth"
import { clearMessage } from "../actions/message"
import EventBus from "../common/EventBus"

const NavHeader = () => {
  const { user: currentUser } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  let location = useLocation()

  useEffect(() => {
    if (["/login", "/register"].includes(location.pathname)) {
      dispatch(clearMessage())
    }
  }, [dispatch, location])

  const logOut = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  useEffect(() => {
    EventBus.on("logout", () => {
      logOut()
    })

    return () => {
      EventBus.remove("logout")
    }
  }, [currentUser, logOut])

  const dropdownMenuItems = [
    {
      to: "/profile",
      name: "Profile",
      text: "profile",
      icon: <Person />,
    },
    {
      to: "/settings",
      name: "Settings",
      text: "settings",
      icon: <Settings />,
    },
  ]

  const notificationItems = [
    {
      to: "/notificationSettings",
      name: "Support",
      icon: <Settings />,
    },
  ]

  const viewAllNotificationItem = [
    {
      to: "/viewAllNotifications",
      name: "Sell All Notifications",
    },
  ]

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark sticky-top">
      <div className="navbar-collapse collapse d-flex justify-content-end">
        <Form className="me-2 ms-2 d-none d-sm-inline-block lst-search">
          <InputGroup>
            <Form.Control type="search" placeholder="Search..." />
            <InputGroup.Text id="btnGroupAddon">
              <Search />
            </InputGroup.Text>
          </InputGroup>
        </Form>

        <Dropdown className="ms-2 me-2 notification-dropdown">
          <Dropdown.Toggle>
            <NotificationsNoneOutlined />
            <Badge bg="danger" className="rounded-circle noti-icon-badge">
              9
            </Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Header className="bg-light">
              <div className="d-flex justify-content-between notification-header">
                <div>Notifications</div>
                <div>
                  {notificationItems.map((item, index) => (
                    <Link key={index} to={item.to}>
                      <div to={item.to}>{item.icon}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </Dropdown.Header>
            <Dropdown.Divider />
            <SimpleBar style={{ height: "300px" }}>
              <ListGroup>
                <ListGroup.Item>
                  <div className="float-start">
                    <Image
                      src="../images/users/user-4.jpg"
                      className="avatar avatar-sm rounded-circle"
                      alt="Ashley Briggs"
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <h4>LST</h4>
                    <span>15 min ago</span>
                  </div>
                  <p>Curabitur ligula sapien euismod vitae.</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="float-start">
                    <Image
                      src="../images/users/user-5.jpg"
                      className="avatar avatar-sm rounded-circle"
                      alt="Support Team"
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <h4>Support Team</h4>
                    <span>1 hr ago</span>
                  </div>
                  <p>Nam pretium turpis et arcu. Duis arcu tortor.</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="float-start">
                    <Image
                      src="../images/users/user-3.jpg"
                      className="avatar avatar-sm rounded-circle"
                      alt="Morbi leo risus"
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <h4>Morbi leo risus</h4>
                    <span>2 hr ago</span>
                  </div>
                  <p>Porta ac consectetur ac.</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="float-start">
                    <Image
                      src="../images/users/user-1.jpg"
                      className="avatar avatar-sm rounded-circle"
                      alt="Stacie Hall"
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <h4>Stacie Hall</h4>
                    <span>1 day ago</span>
                  </div>
                  <p>Pellentesque auctor neque nec urna.</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="float-start">
                    <Image
                      src="../images/users/user-2.jpg"
                      className="avatar avatar-sm rounded-circle"
                      alt="Bertha Martin"
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <h4>Bertha Martin</h4>
                    <span>2 days ago</span>
                  </div>
                  <p>
                    Aenean tellus metus, bibendum sed, posuere ac, mattis non.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="float-start">
                    <Image
                      src="../images/users/user-4.jpg"
                      className="avatar avatar-sm rounded-circle"
                      alt="Ashley Briggs"
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <h4>LST</h4>
                    <span>2 days ago</span>
                  </div>
                  <p>Curabitur ligula sapien euismod vitae.</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="float-start">
                    <Image
                      src="../images/users/user-5.jpg"
                      className="avatar avatar-sm rounded-circle"
                      alt="Support Team"
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <h4>Support Team</h4>
                    <span>2 days ago</span>
                  </div>
                  <p>Nam pretium turpis et arcu. Duis arcu tortor.</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="float-start">
                    <Image
                      src="../images/users/user-3.jpg"
                      className="avatar avatar-sm rounded-circle"
                      alt="Morbi leo risus"
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <h4>Morbi leo risus</h4>
                    <span>2 days ago</span>
                  </div>
                  <p>Porta ac consectetur ac.</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="float-start">
                    <Image
                      src="../images/users/user-1.jpg"
                      className="avatar avatar-sm rounded-circle"
                      alt="Stacie Hall"
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <h4>Stacie Hall</h4>
                    <span>2 days ago</span>
                  </div>
                  <p>Pellentesque auctor neque nec urna.</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="float-start">
                    <Image
                      src="../images/users/user-2.jpg"
                      className="avatar avatar-sm rounded-circle"
                      alt="Bertha Martin"
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <h4>Bertha Martin</h4>
                    <span>3 days ago</span>
                  </div>
                  <p>
                    Aenean tellus metus, bibendum sed, posuere ac, mattis non.
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </SimpleBar>
            <Dropdown.Header className="border-top text-center">
              {viewAllNotificationItem.map((item, index) => (
                <Link key={index} to={item.to} className="footer-links">
                  <div to={item.to}>{item.name}</div>
                </Link>
              ))}
            </Dropdown.Header>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="ms-2 me-2 profile-dropdown">
          <Dropdown.Toggle>
            <Image
              src="./images/users/user-4.jpg"
              className="avatar rounded-circle"
            />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Header>Welcome {currentUser.username}</Dropdown.Header>
            <Dropdown.Divider />
            {dropdownMenuItems.map((item, index) => (
              <Link className="nav-item" key={index} to={item.to}>
                <div to={item.to} className="nav-link">
                  {item.icon} <span>{item.name}</span>
                </div>
              </Link>
            ))}
            <Dropdown.Divider />
            <Dropdown.Item href="{/}" onClick={logOut}>
              <Logout />
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  )
}

export default NavHeader
