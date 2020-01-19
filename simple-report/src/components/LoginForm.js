import React, { Component } from 'react'
import { Form, Icon, Input, Button, message , Spin} from 'antd';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import {BASE_URL} from './Base'
// import { browserHistory } from 'react-router-dom';
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            redirect: false,
            loading:false
        }
    }

  
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values, state) => {
            if (!err) {
                {
                    let data = []
                    let categories = []
                    this.setState({loading:true})
                    Axios.get(BASE_URL, {
                        params: {},
                        auth: { username: values.username, password: values.password }
                    }).then((response) => {

                        this.props.setAuth(true,values.username,values.password)
                        this.state.redirect = true
                        this.state.loading = false
                        this.setState({})
                        
                    })
                        .catch((error) => {
                            message.error(error.message,7)
                            this.props.setAuth(false)
                            this.state.loading = false
                        this.setState({})
                        })
                    }
                  
                }
            }
        );
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        const { redirect,loading } = this.state
        if (redirect) {
            return (<Redirect to={"/report"} />)
        }

        return (

            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
              </Button>
                </Form.Item>
                {loading&&<div className="example" ><Spin indicator={antIcon} /></div>}
            </Form>
        );
    }
}

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);
export default WrappedLoginForm;

