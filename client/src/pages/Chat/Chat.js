import React, { Component }from 'react'
import { List, Input, message, Button} from 'antd'
import { connect } from 'react-redux'
import ws from '../../api/_websocket'
import { setWsStatus, sendMsg } from '../../actions/chat.action'
import { getContacts } from '../../actions/user.action'
import styled from 'styled-components'

class Chat extends Component{
  state = {
    activeChat: null,
    chatText: ''
  }
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    ws.init({
      url: 'ws://localhost:8080',
      connect: e => {
        message.info('websocket connected')
        this.props.dispatch(setWsStatus(0))
      },
      error: e => {
        message.error('fail to connect')
        this.props.dispatch(setWsStatus(1))
      },
      disconnect: e => {
        message.error('websocket disconnected')
        this.props.dispatch(setWsStatus(2))
      }
    })
    // this.props.dispatch(getChatHistory())
    this.props.dispatch(getContacts())
  }
  handleInput = e => {
    const field = e.target.name
    const value = e.target.value
    this.setState({
      [field]: value
    })
  }
  handleSend = e => {
    const { activeChat, chatText } = this.state
    this.props.dispatch(sendMsg(this.state.activeChat, chatText))
  }
  getUserItem = item => {
    return (
      <List.Item
        onClick={e => {
          this.setState({
            activeChat: item.id
          })
        }}
      >
        {item.name}
      </List.Item>
    )
  }
  render() {
    const { contacts, chatHistory, className} = this.props
    return (
      <div className={"chat-container " + className}>
        <div className="user-list-col">
          <List
            header={<Input placeholder="search..."/>}
            dataSource={contacts}
            bordered
            renderItem={this.getUserItem}
          />
        </div>
        <div className="chat-area-col">
        {
          this.state.activeChat ? <div>
            <div className="chat-panel"></div>
            <div>
              <Input name="chatText" onChange={ this.handleInput }/>
              <Button onClick={this.handleSend}>send</Button>
            </div>
          </div> :
          <div> no chat</div>
        }
        </div>
      </div>
    )
  }
}

const Styled = styled(Chat)`
  min-height: 500px;
  margin: 30px;
  border: 1px solid #ddd;
  padding: 20px;
  display: flex;
  align-items: stretch;
  .user-list-col{
    flex: 1;
    margin-right: 20px;
    .ant-list-item{
      cursor: pointer;
      &:hover{
        background: #dde;
      }
    }
  }
  .chat-area-col{
    flex: 2
  }

`

const mapStateToProps = state => ({
  contacts: state.userInfo.contacts,
  // chatHistory: state.chat.history
})

export default connect(mapStateToProps)(Styled)