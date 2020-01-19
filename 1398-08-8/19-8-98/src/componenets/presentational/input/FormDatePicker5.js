
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import moment from 'moment-jalaali'
import DatePicker from 'react-datepicker2';

moment.loadPersian({ dialect: 'persian-modern' });
const handleChange = () => { }

const FormDatePicker5 = ({
    label = " ",
    type = "text",
    placeholder = "",
    helperText = "false",
    id = "fname",
    onChange,
    timeformat = '24',
    ...props }) => {
    const [selectedDay, setSelectedDay] = useState(null);


    return (

        <>
            <div className="form-group row">
                <label
                    htmlFor="fname"
                    className="col-sm-3 text-right control-label "
                >
                    datepicker2
                </label>

                <div className="col-sm-9">

                    <DatePicker
                        format=" jYYYY/jMM/jDD hh:mm"
                        isGregorian={false} />
                    <DatePicker
                    timeFormat="HH:mm"
                        // showTimeSelect showTimeSelectOnly dateFormat="HH:mm"
                        // timeIntervals={30}
                    // onChange={e => handleDateChange(e)}
                    />
                    <DatePicker timeFormat={timeformat === '24' ? 'HH:mm' : 'hh:mm a'} />



                </div>
            </div>



        </>

    )
}



export default FormDatePicker5;
