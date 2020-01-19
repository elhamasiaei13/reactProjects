import React, { Component } from 'react'
import FormInput from '../presentational/input/FormInput';
import Row from '../presentational/Row'
import Col from '../presentational/Col';
import Button from '../presentational/button/Button';
import { Redirect, withRouter } from 'react-router-dom';
import InputGroup from '../presentational/input/InputGroup'
import { connect } from 'react-redux';
import * as actionCreator from '../../store/Action';
import Axios from 'axios';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            username: '',
            password: ''
        }
        this.submit = this.submit.bind(this)
    }

    onChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    submit(e) {
        const { username, password } = this.state
        // this.setState({ redirect: true })
        e.preventDefault()
        // this.props.SET_AUTHENTICATE(true)
        // this.props.SET_PASSWORD(password)
        // this.props.SET_USERNAME(username)
        Axios.get("http://192.168.0.19:6060/login", {
            params: {},
            auth: { username, password }
        }).then(response => {
            this.props.SET_PASSWORD(password)
            this.props.SET_USERNAME(username)
            this.setState({ redirect: true })
            this.props.SET_AUTHENTICATE(true)
        }).catch(error => {
            this.props.SET_AUTHENTICATE(false)
        })


    }

    // if (redirect) {
    //     // this.props.history.location.pathname
    //     // const path=JSON.parse(localStorage.getItem("path"))
    //     const path="/"
    //     // const path=this.props.history.goBack()
    //     return <Redirect to={path} />
    // }

    render() {
        const { username, password, redirect } = this.state
        if (redirect) {
            return <Redirect to="/shipments" />
        }

        return (
            <div className="auth-wrapper d-flex  justify-content-center ">
                <div className="auth-box">
                    <Row>
                        <div className="col-12">
                            <form onSubmit={this.submit} className="form-horizontal">
                                <InputGroup
                                    iconName="ti-user"
                                    value={username}
                                    placeholder="Username"
                                    name="username"
                                    onChange={(e) => { this.onChange(e) }}
                                />
                                <InputGroup
                                    iconName="ti-pencil"
                                    value={password}
                                    placeholder="Password"
                                    name="password"
                                    onChange={(e) => { this.onChange(e) }}
                                />
                                <Button label="submit"
                                    buttonclass="btn btn-info waves-effect waves-light"
                                    type="info btn-block" htmlType="submit" />

                            </form>
                        </div>
                    </Row>
                </div>

            </div>
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
        SET_AUTHENTICATE: (value) => { dispach(actionCreator.SET_AUTHENTICATE(value)) },
        SET_USERNAME: (value) => { dispach(actionCreator.SET_USERNAME(value)) },
        SET_PASSWORD: (value) => { dispach(actionCreator.SET_PASSWORD(value)) },
    }
}

export default withRouter(connect(mapStateToProps, mapDispachToProps)(LoginForm));
