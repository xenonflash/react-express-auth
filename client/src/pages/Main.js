import React, { Component } from 'react'
import authKeep from '../utils/auth-keep'
import { connect } from 'react-redux'
import Chat from '../pages/Chat/Chat'

class Main extends Component{
  state = {

  }
  render() {
    return (
      <div>
        <h1>chat</h1>
        <Chat/>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  auth: state.auth
})

export default authKeep(connect(mapStateToProps)(Main))