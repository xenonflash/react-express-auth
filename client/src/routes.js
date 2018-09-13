import React from 'react'
import { Route } from "react-router-dom"
import App from './components/App'
import Login from './components/Login'
import Register from './components/Register'

const routes = (
  <div className="content">
    <Route exact path="/" component={App} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
  </div>
)
export default routes