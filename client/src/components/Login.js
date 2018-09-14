import React, { Component } from 'react'
import styled from 'styled-components'
import LoginForm from './LoginForm'
import { Row, Col } from 'antd'
import { connect } from 'react-redux';
import { login } from './../actions/auth.action.js'

class Comp extends Component {
  handleLogin = formValues => {
    console.log(formValues)
    this.props.dispatch(login(formValues))
  }
  render() {
    return (
      <Row className={"login " + this.props.className} >
        <Col span={8} offset={8}>
          <h2>Login</h2>
          <LoginForm onLogin={this.handleLogin}/>
        </Col>
      </Row>
    )
  }
}

const Login = styled(Comp)`
`
const mapStateToProps = state => ({
  logining: state.auth.login.logining
})

export default connect(mapStateToProps)(Login)