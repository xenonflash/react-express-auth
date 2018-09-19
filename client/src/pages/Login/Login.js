import React, { Component } from 'react'
import styled from 'styled-components'
import LoginForm from '../../components/LoginForm'
import { Row, Col, message } from 'antd'
import { connect } from 'react-redux';
import { login } from '../../actions/auth.action'

class Comp extends Component {
  handleLogin = formValues => {
    this.props.dispatch(login(formValues))
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.loginStatus.logined === true) {
      message.success('login success')
      // redirect route
      this.props.history.replace('/main')
    }
    if (nextProps.loginStatus.loginFail === true) {
      message.error('login fail')
    }
  }
  render() {
    return (
      <Row className={"login " + this.props.className} >
        <Col span={8} offset={8}>
          <h2>Login</h2>
          <LoginForm
            onLogin={this.handleLogin}
            loading={this.props.loginStatus.logining}
          />
        </Col>
      </Row>
    )
  }
}

const Login = styled(Comp)`
`
const mapStateToProps = state => ({
  loginStatus: state.auth.login
})

export default connect(mapStateToProps)(Login)