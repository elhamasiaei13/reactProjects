import React, { Component } from 'react';
import * as actionCreator from '../../store/Action';
import { connect } from 'react-redux';
import { isObjectExpression } from '@babel/types';
class ErrorHandeling {

    static handleCatch(error, prop,dispach) {
        console.log("ErrorHandeling", error, error.message, prop);
        console.log("this.props", this.props);
           return this.props.dispach(actionCreator.SET_AUTHENTICATE(false)) 
     
    }
}

const mapDispachToProps = (dispach) => {
    return {
        SET_AUTHENTICATE: (value) => { dispach(actionCreator.SET_AUTHENTICATE(value)) },
    }
}
export default (connect(null, mapDispachToProps)(ErrorHandeling));
