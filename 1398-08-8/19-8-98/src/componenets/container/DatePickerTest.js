import React, { Component } from 'react'
import FormDatePicker from '../presentational/input/FormDatePicker'
import FormDatePicker1 from '../presentational/input/FormDatePicker1'
// import FormDatePicker2 from '../presentational/input/FormDatePicker2'
import FormDatePicker3 from '../presentational/input/FormDatePicker3'
import FormDatePicker4 from '../presentational/input/FormDatePicker4'
import FormDatePicker5 from '../presentational/input/FormDatePicker5'
export default class DatePickerTest extends Component {
    render() {
        return (
            <div>
                <FormDatePicker />
                <hr />
                <FormDatePicker1 />
                <hr />

                <FormDatePicker3 />
                <hr />
                <FormDatePicker4 />
                <hr />
                <FormDatePicker5 />
                <hr />
            </div>
        )
    }
}
