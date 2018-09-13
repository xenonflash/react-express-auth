import React from 'react'
import styled from 'styled-components'
const logo = require('../logo.svg')

const Component = props => (
  <div className={'navbar ' + props.className}>
    <img src={logo} className="logo"/>
    <a href=""> home </a>
  </div>
)

const Navbar = styled(Component)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #999;
  display: flex;
  align-items: center;
  padding: 0 30px;
  background: #eee
  .logo{
    margin-right: auto;
    height: 50px;
  }
`

export default Navbar