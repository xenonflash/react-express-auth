import React, { Component } from 'react'
import { Input, Button, Form, Icon } from 'antd'
import _isEmpty from 'lodash/isEmpty'
const FormItem = Form.Item

class LoginForm extends Component {
  state = {
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator, getFieldError, getFieldsError } = this.props.form

    return (
      <Form className="login-form" onSubmit={this.handleSubmit}>
        <FormItem>
          {
            getFieldDecorator('username', {
              rules: [
                {required: true, message: "username required"}
              ]
            })(<Input
                placeholder="user name"
                prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
            )
          }
        </FormItem>
        <FormItem>
          {
            getFieldDecorator('password', {
              rules: [
                { required: true, messge: "password required"}
              ]
            })(
              <Input
                type="password"
                placeholder="password"
                prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
            )
          }

        </FormItem>
        <FormItem>
          <Button
            htmlType="submit"
            type="primary"
          >Login</Button>
        </FormItem>
      </Form >
    )
  }
}

export default Form.create()(LoginForm)