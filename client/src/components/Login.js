import React, { Component } from 'react'
import styled from 'styled-components'

class Comp extends Component{

  render() {
    return <div className={"login " + this.props.className} >login page</div>
  }
}

const Login = styled(Comp)`
  font-size: 50px
`
export default Login