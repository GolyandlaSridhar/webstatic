import React from "react"
import { Card, Dropdown, Image, Table } from "react-bootstrap"
import { Link } from "react-router-dom"

const RecentUsers = () => {
  return (
    <Card className="border shadow">
      <Card.Body>
        <div className="float-end">
          <ul className="list-inline mb-0">
            <li className="list-inline-item me-2 recentUsers-menu-dropdown">
              <Dropdown>
                <Dropdown.Toggle>
                  <span>Status: Active</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Link className="nav-item">
                    <div className="nav-link">
                      <span>Active</span>
                    </div>
                  </Link>
                  <Link className="nav-item">
                    <div className="nav-link">
                      <span>Blocked</span>
                    </div>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="list-inline-item recentUsers-menu-dropdown">
              <Dropdown>
                <Dropdown.Toggle>
                  <span>Sort By: Name</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Link className="nav-item">
                    <div className="nav-link">
                      <span>ID</span>
                    </div>
                  </Link>
                  <Link className="nav-item">
                    <div className="nav-link">
                      <span>Job Title</span>
                    </div>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
        <h5 className="card-title mb-4">Recent Users</h5>
        <div className="card-text">
          <Table responsive="sm" striped borderless hover className="mb-0">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Job Title</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#SD001</td>
                <td>
                  <Image
                    src="./images/users/user-3.jpg"
                    alt="user"
                    className="rounded-circle h-auto avatar-xs me-2"
                  />
                  <span> Anna Ciantar</span>
                </td>
                <td>Designer</td>
                <td>annac@hotmai.us</td>
                <td>(216) 76 298 896</td>
                <td>
                  <span className="badge bg-success bg-soft text-white">
                    Active
                  </span>
                </td>
                <td>Philippines</td>
              </tr>

              <tr>
                <td>#SD002</td>
                <td>
                  <Image
                    src="./images/users/user-4.jpg"
                    alt="user"
                    className="rounded-circle h-auto avatar-xs me-2"
                  />
                  <span>Paul J. Friend</span>
                </td>
                <td>Developer</td>
                <td>pauljfrnd@jourrapide.com</td>
                <td>937-330-1634</td>
                <td>
                  <span className="badge bg-success bg-soft text-white">
                    Active
                  </span>
                </td>
                <td>New York</td>
              </tr>

              <tr>
                <td>#SD003</td>
                <td>
                  <Image
                    src="./images/users/user-5.jpg"
                    alt="user"
                    className="rounded-circle h-auto avatar-xs me-2"
                  />
                  <span>Kathryn S. Collier</span>
                </td>
                <td>Owner</td>
                <td>annac@hotmai.us</td>
                <td>(216) 76 298 896</td>
                <td>
                  <span className="badge bg-success bg-soft text-white">
                    Active
                  </span>
                </td>
                <td>Philippines</td>
              </tr>

              <tr>
                <td>#SD004</td>
                <td>
                  <Image
                    src="./images/users/user-1.jpg"
                    alt="user"
                    className="rounded-circle h-auto avatar-xs me-2"
                  />
                  <span>Labeeb Ghali</span>
                </td>
                <td>Designer</td>
                <td>labebswad@teleworm.us</td>
                <td>050 414 8778</td>
                <td>
                  <span className="badge bg-danger bg-soft text-white">
                    Blocked
                  </span>
                </td>
                <td>United Kingdom</td>
              </tr>

              <tr>
                <td>#SD005</td>
                <td>
                  <Image
                    src="./images/users/user-2.jpg"
                    alt="user"
                    className="rounded-circle h-auto avatar-xs me-2"
                  />
                  <span>Timothy Kauper</span>
                </td>
                <td>Founder</td>
                <td>thykauper@rhyta.com</td>
                <td>(216) 75 612 706</td>
                <td>
                  <span className="badge bg-success bg-soft text-white">
                    Active
                  </span>
                </td>
                <td>Denmark</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  )
}

export default RecentUsers
