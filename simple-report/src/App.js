import React, { Component, PureComponent } from 'react'
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import Report from './components/Report';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Route, Redirect, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authentication: false,
      username: '',
      password: ''
    }
  }

  setAuth(value, username = '', password = '') {
    this.setState({
      authentication: value,
      username: username,
      password: password
    })
    localStorage.setItem("reportState",JSON.stringify(this.state))
    //     this.setState((prev) => {
    //       prev.authentication = value
    //       prev.username = username
    //       prev.password = password
    // const preState=prev
    //       return (preState);
    //     })
    //     console.log(this.props);
  }
componentWillMount(){
  if(localStorage.getItem("reportState")){
    const initData=JSON.parse(localStorage.getItem("reportState"))
    this.setState({
      authentication: initData.authentication,
      username: initData.username,
      password: initData.password
    })

  }
  else{return null}
}
  render() {
    const { authentication } = this.state
    return (
      
        <Layout>

          <Header className="header">
            {/* <div className="logo" /> */}
          </Header>

          <Layout>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Content
                // style={{
                //   background: '#fff',
                //   padding: 24,
                //   margin: 0,
                //   // minHeight: 280,
                // }}
              >
              <Switch>
                <Route path="/login"
                  render={() => {
                    return (<LoginForm setAuth={(val, val1, val2) => this.setAuth(val, val1, val2)} />)
                  }} />

                <Route path="/report" render={() => {
                  return (<Report
                    auth={this.state}
                    setAuth={(val) => this.setAuth(val)}
                  />)
                }} />

                <Route exact path="/" render={() => {
                  if(authentication){
                    return (<Redirect to="/report" />) 
                  }
                  else{
                    return (<Redirect to="/login" />)
                  }
                  // return (<Redirect to="/report" />)
                }} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
     
    );
  }
}
