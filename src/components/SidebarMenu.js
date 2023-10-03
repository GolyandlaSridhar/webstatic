import React, { useState } from "react"

import {
  Dashboard,
  LibraryBooks,
  Apps,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  ChatOutlined,
} from "@mui/icons-material"

import { Image } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"

const SidebarMenu = (props) => {
  const location = useLocation()

  const [sidebarCollpased, setSidebarCollapsed] = useState(false)

  const handleCollapsedSidebar = () => {
    setSidebarCollapsed(!sidebarCollpased)
  }

  const classCollapsed = [
    "d-flex flex-column flex-shrink-0 sticky-top text-white bg-dark vh-100",
    sidebarCollpased ? "p-3 sidebar" : "sidebarCollpased",
  ].join(" ")

  const imgCollpased = [
    "flex-grow-1 mb-3 mb-md-0 me-md-auto text-center text-white text-decoration-none",
    sidebarCollpased ? " d-block" : " d-none",
  ]

  const collapsedIcons = [
    "nav nav-pills flex-column mb-auto",
    sidebarCollpased ? " " : " text-center",
  ]

  const Icon = sidebarCollpased
    ? KeyboardDoubleArrowLeft
    : KeyboardDoubleArrowRight

  const NavBrandClassName = sidebarCollpased
    ? "navbar-brand"
    : "navbar-brand pt-4"

  const sidebarClassName = sidebarCollpased
    ? "d-flex justify-content-between"
    : "d-flex justify-content-center"

  const menuItem = [
    {
      to: "/",
      name: "Dashboard",
      text: "dashboard",
      icon: <Dashboard />,
    },
    {
      to: "/tutorials",
      name: "Tutorials",
      text: "tutorials",
      icon: <LibraryBooks />,
    },
    {
      to: "/contactus",
      name: "Contact Us",
      text: "contactus",
      icon: <Apps />,
    },
    {
      to: "/chat",
      name: "Chat",
      text: "chat",
      icon: <ChatOutlined />,
    },
  ]

  return (
    <div className={classCollapsed}>
      <div className={sidebarClassName}>
        <div className={imgCollpased} href="{/}">
          <Image src="./images/logo.png" width="40" height="32" />
        </div>
        <div className={NavBrandClassName} onClick={handleCollapsedSidebar}>
          <Icon />
        </div>
      </div>

      <hr />
      <div className={collapsedIcons}>
        {menuItem.map((item, index) => (
          <Link className="nav-item" key={index} to={item.to}>
            <div
              to={item.to}
              className="nav-link text-white"
              id={location.pathname === item.to ? "active" : ""}
            >
              {item.icon} <span>{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SidebarMenu
