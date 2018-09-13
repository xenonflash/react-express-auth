import React, { Component } from 'react'
import styled from 'styled-components'

class Comp extends Component{

  render() {
    return <div className={"register " + this.props.className} >Register</div>
  }
}

const Register = styled(Comp)`
  font-size: 50px
`
export default Register