
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import moment from 'moment-jalaali'
import DatePicker from 'react-datepicker2';
import "react-persian-datepicker/lib/styles/basic.css"

moment.loadPersian({ dialect: 'persian-modern' });
const FormDatePicker = ({
    label = " ",
    type = "text",
    placeholder = "",
    helperText = "false",
    id = "fname",
    onChange,
    disabled=false,
    labelClassName = "col-sm-3",
    valueClassName = "col-md-6",
    ...props }) => {
    return (
        <>
            <div className="form-group row">
                <label
                    htmlFor="fname"
                    className={" text-right control-label col-form-label margin-bottom "+labelClassName} >
                    <FormattedMessage
                        id={label}
                        defaultMessage={label}
                    />
                </label>
                <div className={valueClassName}>
                    {/* <div className="input-group"> */}
                        <DatePicker
                            id="uname"
                            {...props}
                            // className="form-control dirLtR"
                            className="form-control dirLtR"
                            isGregorian={false}
                            onChange={onChange}
                            disabled={disabled}
                            placeholder={"iiiii"}
                        />

                        {/* <div className="input-group-append">
                            <span className="input-group-text">
                                <i className="m-r-10 mdi mdi-calendar-text">  </i>
                            </span>
                        </div> */}
                    {/* </div> */}

                </div>

            </div>



        </>




    )
}
export default FormDatePicker;
