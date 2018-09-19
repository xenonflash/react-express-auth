import React from 'react'
import { Route } from "react-router-dom"
import App from './pages/App'
import Login from './pages/Login/Login'
import Register from './pages/Register'
import Main from './pages/Main'

const routes = (
  <div className="content" style={{height: '100%'}}>
    <Route exact path="/" component={App} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/main" component={Main} />
  </div>
)

export default routes