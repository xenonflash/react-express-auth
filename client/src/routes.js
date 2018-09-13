import React from 'react'
import { Route } from "react-router-dom"
import App from './components/App'
import Login from './components/Login'

const routes = (
  <div className="content">
    <Route exact path="/" component={App} />
    <Route exact path="/login" component={Login} />
  </div>
)
export default routes