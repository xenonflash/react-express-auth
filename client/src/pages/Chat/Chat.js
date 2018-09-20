import React, { Component }from 'react'
import { List, Input, message, Button} from 'antd'
import { connect } from 'react-redux'
import ws from '../../api/_websocket'
import { setWsStatus, sendMsg, msgReceived } from '../../actions/chat.action'
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
      },
      serverPush: e => {
        // TODO 分发聊天消息
        this.props.dispatch(msgReceived(e))
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
    const { userInfo } = this.props
    const msg = {
      from: userInfo._id,
      to: activeChat,
      time: +Date.now(),
      msg: chatText
    }
    this.props.dispatch(sendMsg(msg))
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
    const { contacts, chatHistory, className, userInfo} = this.props
    const { activeChat } = this.state
    const currentChatHistory = chatHistory[activeChat]
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
          this.state.activeChat ? <div className="chat-interactive-panel">
            <div className="chat-panel">
              {
                currentChatHistory && currentChatHistory.map(chat => (
                  <div className={`chat-item ${chat.from === userInfo._id ? 'self' : 'other'}`} key={chat.id}>
                    <p style={{fontSize: '12px'}}>{chat.time}</p>
                    <p>{chat.msg}</p>
                  </div>
                ))
              }
            </div>
            <div className="chat-input">
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
    flex: 2;
    .chat-interactive-panel{
      height: 100%
      position: relative;
    }
    .chat-item{
      border-bottom: 1px solid lightgrey;
    }
    .chat-item.self{
      color: green;
    }
    .chat-item.other{
      text-align: right;
      color: purple;
    }
    .chat-panel{
      padding: 15px;
      border-radius: 10px;
      border: 2px solid #eee;
      height: 100%;
      padding-bottom: 80px;
    }
    .chat-input{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }

`

const mapStateToProps = state => ({
  contacts: state.userInfo.contacts,
  userInfo: state.userInfo.user,
  chatHistory: state.chat.chatHistory
})

export default connect(mapStateToProps)(Styled)