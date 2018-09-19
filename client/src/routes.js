import React from 'react'
import { Route } from "react-router-dom"
import App from './components/App'
import Login from './components/Login'
import Register from './components/Register'
import Main from './pages/Main'

const routes = (
  <div className="content">
    <Route exact path="/" component={App} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/main" component={Main} />
  </div>
)

export default routes