import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import store from "./store"

import App from "./App"
import { BrowserRouter } from "react-router-dom"
import * as serviceWorker from "./serviceWorker"

import "bootstrap/dist/css/bootstrap.min.css"
import "./assests/css/app.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
serviceWorker.unregister()
