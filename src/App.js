import React from "react"
import { useSelector } from "react-redux"

import MainRoutes from "./Routes"
import Sidebar from "./components/SidebarMenu"
import NavHeader from "./components/NavHeader"
import FooterLayout from "./components/Footer"
import Layout from "./components/layout"

const App = () => {
  const { isLoggedIn } = useSelector((state) => state.auth)

  return (
    <div className="wrapper">
      {isLoggedIn ? <Sidebar /> : ""}
      <div className="main">
        {isLoggedIn ? (
          <>
            <NavHeader />
            <MainRoutes />
            <FooterLayout />
          </>
        ) : (
          <Layout />
        )}
      </div>
    </div>
  )
}

export default App
