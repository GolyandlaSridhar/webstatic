import React, { useState } from "react"
import TutorialDataService from "../services/TutorialService"
import { Card } from "react-bootstrap"

const AddTutorial = () => {
  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    published: false,
  }
  const [tutorial, setTutorial] = useState(initialTutorialState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setTutorial({ ...tutorial, [name]: value })
  }

  const saveTutorial = () => {
    var data = {
      title: tutorial.title,
      description: tutorial.description,
    }

    TutorialDataService.create(data)
      .then((response) => {
        setTutorial({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,
        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const newTutorial = () => {
    setTutorial(initialTutorialState)
    setSubmitted(false)
  }
  return (
    <div className="col-xl-6 p-3">
      <Card className="border-0">
        <Card.Body>
          <Card.Title>Add Tutorial</Card.Title>
          <Card.Text>
            <div className="submit-form">
              {submitted ? (
                <div>
                  <h4>You submitted successfully!</h4>
                  <button className="btn btn-success" onClick={newTutorial}>
                    Add
                  </button>
                </div>
              ) : (
                <div>
                  <div className="form-group mb-3">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      required
                      value={tutorial.title}
                      onChange={handleInputChange}
                      name="title"
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="description">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      required
                      value={tutorial.description}
                      onChange={handleInputChange}
                      name="description"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      onClick={saveTutorial}
                      className="btn btn-primary text-center"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AddTutorial
