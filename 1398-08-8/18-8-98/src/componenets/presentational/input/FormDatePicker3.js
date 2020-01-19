
import React, { Component } from 'react'
import moment from 'moment-jalaali'
import { DateTimeInput, DateTimeInputSimple, DateInput, DateInputSimple } from 'react-hichestan-datetimepicker';

export default class FormDatePicker3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myDateTime: ''
        }
    }

    handleChange = (event) => {
        const newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    };

    render() {
        return (
            <div>
                <div className="form-group row">
                    <label
                        htmlFor="fname"
                        className="col-sm-3 text-right control-label "
                    >
                        hichestan
                </label>

                    <div className="col-sm-9">
                        <DateTimeInput
                            value={this.state.myDateTime}
                            name={'myDateTime'}
                            onChange={this.handleChange}
                           
                        />

                    </div>

                </div>
            </div>
        )
    }
}
