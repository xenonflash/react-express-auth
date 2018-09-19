import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const logo = require('../logo.svg')

const Component = props => {
  const { userInfo } = props
  return (
    <div className={'navbar ' + props.className}>
      <Link to="/" className="logo">
        <img src={logo} />
      </Link>
      <div className="nav-menu">
        <Link to="/login">Login</Link>
        <Link to='/register'>SignUp</Link>
      </div>
      {
        userInfo && <div className="user-menu">
          <img src="userInfo.avatar"/>
          <span>{userInfo.name}</span>
        </div>
      }
    </div>
  )
}

const Navbar = styled(Component)`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #999;
  display: flex;
  align-items: center;
  padding: 0 30px;
  background: #eee;
  .logo{
    margin-right: auto;
    img{
      height: 50px;
    }
  }
  .nav-menu{
    a{
      padding: 0 20px
    }
  }
`

const mapStateToProps = state => ({
  userInfo: state.user
})

export default connect(mapStateToProps)(Navbar)