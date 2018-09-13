import React, { Component } from 'react';
import styled from 'styled-components'
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <div className={'App ' + this.props.className }>
        <Navbar/>
        hello
      </div>
    );
  }
}
const StyledCom = styled(App)`
  margin-top: 70px;
  font-size: 30px;
`
export default StyledCom;
