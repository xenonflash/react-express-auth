import React, { Component } from 'react'
import authKeep from '../utils/auth-keep'
import { connect } from 'react-redux'

class Main extends Component{
  state = {

  }
  render() {
    return (
      <h1>main</h1>
    )
  }
}
const mapStateToProps = state => ({
  auth: state.auth
})

export default authKeep(connect(mapStateToProps)(Main))