import React, { Component } from 'react'
import styled from 'styled-components'
import LoginForm from './LoginForm'
import { Row, Col } from 'antd'

class Comp extends Component {

  render() {
    return (
      <Row className={"login " + this.props.className} >
        <Col span={8} offset={8}>
          <h2>Login</h2>
          <LoginForm/>
        </Col>
      </Row>
    )
  }
}

const Login = styled(Comp)`
`
export default Login