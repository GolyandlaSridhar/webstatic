import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  const FooterMenuItems = [
    {
      to: "/support",
      name: "Support",
      text: "support",
    },
    {
      to: "/help",
      name: "Help",
      text: "help",
    },
    {
      to: "/privacy",
      name: "Privacy",
      text: "privacy",
    },
    {
      to: "/terms",
      name: "Terms",
      text: "terms",
    },
  ]

  return (
    <nav className="navbar navbar-expand navbar-light bg-light border-top">
      <div className="navbar-collapse collapse d-flex justify-content-end">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 text-start">
              <ul className="list-inline m-0">
                {FooterMenuItems.map((item, index) => (
                  <Link className="list-inline-item" key={index} to={item.to}>
                    <div to={item.to} className="footer-links">
                      <span>{item.name}</span>
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="col-6 text-end">
              <p className="mb-0 text-dark">
                <span className="footer-links">© 2023 -</span>{" "}
                <a href="index.html" className="footer-links">
                  LST
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Footer
