import React, { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"

import Form from "react-validation/build/form"
import Input from "react-validation/build/input"
import CheckButton from "react-validation/build/button"

import { login } from "../actions/auth"

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    )
  }
}

const Login = (props) => {
  let navigate = useNavigate()

  const form = useRef()
  const checkBtn = useRef()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const { isLoggedIn } = useSelector((state) => state.auth)
  const { message } = useSelector((state) => state.message)

  const dispatch = useDispatch()

  const onChangeUsername = (e) => {
    const username = e.target.value
    setUsername(username)
  }

  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }

  const handleLogin = (e) => {
    e.preventDefault()

    setLoading(true)

    form.current.validateAll()

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          navigate("/")
          window.location.reload()
        })
        .catch(() => {
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }

  if (isLoggedIn) {
    return <Navigate to="/" />
  }

  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center vh-100">
        <Col xl={2} md={2}></Col>
        <Col xl={8} md={8}>
          <Row className="justify-content-center align-items-center bg-white border-0 shadow">
            <Col
              xl={6}
              md={6}
              className="d-flex justify-content-center align-items-center mt-3 mb-3"
            >
              <img
                src="./images/login/login.jpg"
                className="img-fluid"
                alt="login"
              />
            </Col>
            <Col xl={6} md={6}>
              <h4 className="text-center mb-4">Login</h4>
              <Form onSubmit={handleLogin} ref={form}>
                {message && (
                  <div className="form-group mb-3 mt-3">
                    <div className="text-danger" role="alert">
                      {message}
                    </div>
                  </div>
                )}
                <div className="align-items-center justify-content-center justify-content-lg-start">
                  <div className="mb-3">
                    <label htmlFor="username">Email / Username</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="username"
                      value={username}
                      onChange={onChangeUsername}
                      placeholder="Enter Email or Username"
                      validations={[required]}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <Input
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={onChangePassword}
                      placeholder="Enter Password"
                      validations={[required]}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="rememberMeCheckbox"
                      />
                      <label
                        className="form-check-label ms-1"
                        htmlFor="rememberMeCheckbox"
                      >
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <button
                      className="btn btn-primary btn-block"
                      disabled={loading}
                    >
                      {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}
                      <span>Login</span>
                    </button>
                  </div>
                </div>
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
              </Form>
            </Col>
          </Row>
        </Col>
        <Col xl={2} md={2}></Col>
      </Row>
    </Container>
  )
}

export default Login
