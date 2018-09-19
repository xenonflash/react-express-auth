import React, { Component } from 'react'

export default function(Comp) {
  return class extends Component{
    constructor(props) {
      super(props)
    }
    componentWillMount() {
      const logined = !!window.localStorage.getItem('tk')
      if (!logined) {
        window.location.replace('/')
        return
      }
    }
    render() {
      return <Comp {...this.props}/>
    }
  }
}