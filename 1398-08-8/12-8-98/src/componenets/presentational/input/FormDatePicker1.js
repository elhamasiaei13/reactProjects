
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import moment from 'moment-jalaali'
import { Calendar, DatePicker } from 'react-persian-datepicker';

moment.loadPersian({ dialect: 'persian-modern' });

const handleChange = () => { }


const FormDatePicker1 = ({
    label = " ",
    type = "text",
    placeholder = "",
    helperText = "false",
    id = "fname",
    styles,
    onChange,
    ...props }) => {
    const [selectedDay, setSelectedDay] = useState(null);

    const style2 = require("./basic.css")
    return (
        <>
            <div className="form-group row">
                <label
                    htmlFor="fname"
                    className="col-sm-3 text-right control-label "
                >
                    react-persian-datepicker
                </label>

                <div className="col-sm-9">
                    <DatePicker
                        styles={styles}
                        placeholder={"react-persian-datepicker"} />
                    <DatePicker
                        Gregorian={true}

                        // timePickerComponent={MyTimePicker}
                        inputFormat="jYYYY/jM/jD hh:mm A"
                    // value={this.state.value}
                    // onChange={value => this.setState({ value })}
                    />

                    {helperText === "false" ? '' :
                        <small
                            id="textHelp"
                            className="form-text text-muted">
                            {helperText}
                        </small>
                    }
                </div>
            </div>



        </>




    )
}
FormDatePicker1.defaultProps = {
    styles: require("./basic.css"),
    containerProps: {}
};
export default FormDatePicker1;
