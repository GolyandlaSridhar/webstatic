import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  getUserTutorials,
  findTutorialsByTitle,
  deleteAllTutorials,
} from "../actions/tutorials"
import { Link } from "react-router-dom"
import { Col, Row, Card, Dropdown, Container } from "react-bootstrap"
import { MoreVert, Autorenew, Add, DeleteOutline } from "@mui/icons-material"

import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css"

const TutorialsList = () => {
  const [currentTutorial, setCurrentTutorial] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [searchTitle, setSearchTitle] = useState("")

  const tutorials = useSelector((state) => state.tutorials)
  //console.log("tutorials : " + tutorials)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserTutorials())
  }, [dispatch])

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value
    setSearchTitle(searchTitle)
  }

  const refreshData = () => {
    setCurrentTutorial(null)
    setCurrentIndex(-1)
  }

  const setActiveTutorial = (tutorial, index) => {
    setCurrentTutorial(tutorial)
    setCurrentIndex(index)
  }

  const removeAllTutorials = () => {
    dispatch(deleteAllTutorials())
      .then((response) => {
        console.log(response)
        refreshData()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const findByTitle = () => {
    refreshData()
    dispatch(findTutorialsByTitle(searchTitle))
  }

  const dropdownMenuItems = [
    {
      to: "/refresh",
      name: "Refresh",
      text: "refresh",
      icon: <Autorenew />,
    },
    {
      to: "/addTutorial",
      name: "Add New",
      text: "addTutorial",
      icon: <Add />,
    },
    {
      to: "/deleteAllTutorials",
      name: "Delete All",
      text: "deleteTutorial",
      icon: <DeleteOutline />,
    },
  ]

  return (
    <Row className="">
      <Col lg={12}>
        <Card className="border shadow">
          <Card.Body>
            <div className="dropdown tutorial-list-dropdown float-end">
              <Dropdown>
                <Dropdown.Toggle>
                  <MoreVert fontSize="small" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {dropdownMenuItems.map((item, index) => (
                    <Link className="nav-item" key={index} to={item.to}>
                      <div to={item.to} className="nav-link">
                        {item.icon} <span>{item.name}</span>
                      </div>
                    </Link>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <h5 className="card-title">My Tutorials List</h5>
            <div className="card-text">
              <div className="list-group">
                <SimpleBar style={{ maxHeight: 400 }}>
                  {tutorials &&
                    tutorials.map((tutorial, index) => (
                      <label className="list-group-item border-0" key={index}>
                        <input
                          type="checkbox"
                          className="form-check-input me-2"
                          name="tutorial"
                          value={tutorial.title}
                          key={index}
                        />
                        {tutorial.description}
                      </label>
                    ))}
                </SimpleBar>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default TutorialsList
