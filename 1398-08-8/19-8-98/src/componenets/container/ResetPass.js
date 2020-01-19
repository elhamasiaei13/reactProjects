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

class ResetPass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currrentPassword: '',
            newPassword: '',
            repeatNewPasswords: '',

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
    }

    render() {
        const { currrentPassword, newPassword, repeatNewPasswords } = this.state


        return (
            <div className="auth-wrapper d-flex  justify-content-center ">
                <div className="auth-box">
                    <Row>
                        <div className="col-12">
                            <form onSubmit={this.submit} className="form-horizontal">
                                <InputGroup
                                    iconName="ti-pencil"
                                    value={currrentPassword}
                                    placeholder="‍رمز عبور فعلی"
                                    name="currrentPassword"
                                    onChange={(e) => { this.onChange(e) }}
                                />
                                <InputGroup
                                    iconName="ti-pencil"
                                    value={newPassword}
                                    placeholder="رمز عبور جدید"
                                    name="newPassword"
                                    onChange={(e) => { this.onChange(e) }}
                                />
                                <InputGroup
                                    iconName="ti-pencil"
                                    value={repeatNewPasswords}
                                    placeholder="تکرار رمز عبور جدید"
                                    name="repeatNewPasswords"
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

export default withRouter(connect(mapStateToProps, mapDispachToProps)(ResetPass));
