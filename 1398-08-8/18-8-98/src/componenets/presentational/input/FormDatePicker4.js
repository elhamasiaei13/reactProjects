
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import moment from 'moment-jalaali'
// import { DatePicker } from "react-jalali-datepicker";

moment.loadPersian({ dialect: 'persian-modern' });

const handleChange = () => { }


const FormDatePicker3 = ({
    label = " ",
    type = "text",
    placeholder = "",
    helperText = "false",
    id = "fname",
    onChange,
    ...props }) => {
    const [selectedDay, setSelectedDay] = useState(null);



    return (

        <>
            <div className="form-group row">
                <label
                    htmlFor="fname"
                    className="col-sm-3 text-right control-label "
                >
                    react-jalali-datepicker
                </label>

                <div className="col-sm-9">
                    {/* <DatePicker /> */}
                </div>
            </div>



        </>




    )
}
export default FormDatePicker3;
