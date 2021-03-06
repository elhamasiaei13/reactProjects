import React, { Component } from 'react'
import './css/c3.min.css'
import './css/chartist.min.css'
import './css/style.min.css'
import './css/jquery-jvectormap-2.0.2.css'
import './css/font-awesome.min.css'
import './App.css';
import Header from './componenets/Layout/Header'
import Sider from './componenets/Layout/Sider'
import Content from './componenets/Layout/content/Content'
import Wrapper from './componenets/presentational/Wrapper';
import Main from './componenets/container/Main'
import LoginForm from './componenets/container/LoginForm'
import Menu from './componenets/container/Menu'
import ContainerFluid from './componenets/Layout/content/ContainerFluid';
import moment from 'moment-jalaali'
import { connect } from 'react-redux';
import * as actionCreator from './store/Action'
import { withRouter, Route, Redirect } from 'react-router-dom';
import test from './img/horse.jpg'
import axios from 'axios';
import { tsImportEqualsDeclaration } from '@babel/types';

class App extends Component {
  componentWillMount() {
    if (JSON.parse(localStorage.getItem('authentication'))) {
      this.props.SET_AUTHENTICATE(JSON.parse(localStorage.getItem('authentication')))
    }
    else {
      this.props.SET_AUTHENTICATE(false)

      return null
    }
    if (JSON.parse(localStorage.getItem('waybillNumber'))) {
      this.props.set_waybillnumber(JSON.parse(localStorage.getItem('waybillNumber')))
    }
    else {
      return null
    }
    if (JSON.parse(localStorage.getItem('userName'))) {
      this.props.SET_USERNAME(JSON.parse(localStorage.getItem('userName')))
    }
    else {
      return null
    }
    if (JSON.parse(localStorage.getItem('password'))) {
      this.props.SET_PASSWORD(JSON.parse(localStorage.getItem('password')))
    }
    else {
      return null
    }
  }

  componentDidMount() {
    if (JSON.parse(localStorage.getItem('authentication'))) {
      this.props.SET_AUTHENTICATE(JSON.parse(localStorage.getItem('authentication')))
      this.setState({ authentication: this.props.authentication })
    }
    else {
      this.props.SET_AUTHENTICATE(false)
      this.setState({ authentication: this.props.authentication })
      return null
    }
    if (JSON.parse(localStorage.getItem('waybillNumber'))) {
      this.props.set_waybillnumber(JSON.parse(localStorage.getItem('waybillNumber')))
    }
    else {
      return null
    }

    if (JSON.parse(localStorage.getItem('path'))) {
      this.setState({ path: JSON.parse(localStorage.getItem("path")) })
    }
    else {
      return null
    }

  }

  componentWillReceiveProps() {
    let path = this.props.history.location.pathname
    if (path != "/login") {
      localStorage.setItem("path", JSON.stringify(path))
    }
    if (path == "/login") {
      this.setState({ path: JSON.parse(localStorage.getItem("path")) })
    }
    else if ((this.props.authentication == false)) {
      this.setState({ path: JSON.parse(localStorage.getItem("path")) })
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      path: '',
      // authentication: this.props.authentication,
      sidebartype: 'full'
    }
  }

  setAuth = (arg) => {
    this.props.SET_AUTHENTICATE(true)
    this.setState({ authentication: true })
  }

  toggleSider(e) {
    this.setState({ sidebartype: e })
  }

  render() {

    const m = moment('1360/5/26', 'jYYYY/jM/jD')
    const { sidebartype,
      path,
    } = this.state
    const { authentication } = this.props

    return (
      <>

        {authentication ?
          <Wrapper sidebartype={sidebartype} >
            <Redirect to={path} />
            <Header sidebartype={sidebartype} toggleSider={(e) => this.toggleSider(e)} />
            <Sider >
              <Menu />
            </Sider>
            <Content>
              <Main test={"test"} authentication={authentication} setAuth={() => this.setAuth()} />
            </Content>
          </Wrapper >
          :
          <>
            <Redirect to={"/login"} />
            <>
              {/* <ContainerFluid >
                {authentication}
                <LoginForm />
              </ContainerFluid > */}
            </>
            <Route exact path="/login"
              render={() => {
                return (
                  <>
                    <ContainerFluid >
                      {authentication}
                      <LoginForm />
                    </ContainerFluid >
                  </>
                )
              }} />
          </>
        }
      </>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    authentication: store.Reducer.authentication,
  }
}

const mapDispachToProps = (dispach) => {
  return {
    set_waybillnumber: (value) => { dispach(actionCreator.SET_WAYBILLNUMBER(value)) },
    SET_AUTHENTICATE: (value) => { dispach(actionCreator.SET_AUTHENTICATE(value)) },
    SET_USERNAME: (value) => { dispach(actionCreator.SET_USERNAME(value)) },
    SET_PASSWORD: (value) => { dispach(actionCreator.SET_PASSWORD(value)) },
  }
}
export default withRouter(connect(mapStateToProps, mapDispachToProps)(App))

