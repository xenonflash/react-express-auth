import React, { Component } from 'react'
import styled from 'styled-components'
import { Col, Row } from 'antd'
import RegisterForm from './RegisterForm'
import { connect } from 'react-redux'
import { register } from '../actions/auth.action'

class Comp extends Component{
  handleRegister = formValues => {
    console.log(formValues)
    this.props.dispatch(register(formValues))
  }
  render() {
    return (
      <Row className={"register " + this.props.className}>
        <Col span={8} offset={8}>
          <h2>Register</h2>
          <RegisterForm onRegister={this.handleRegister}/>
        </Col>
      </Row>
    )
  }
}

const Register = styled(Comp)`

`
const mapStateToProps = state => {
  return {
    registering: state => state.auth.registering
  }
}

export default connect(mapStateToProps)(Register)