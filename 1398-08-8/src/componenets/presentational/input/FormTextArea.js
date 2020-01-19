import React from 'react'
import { FormattedMessage } from 'react-intl';

const FormTextArea = ({
    label = " ",
    type = "text",
    placeholder = "",
    helperText = "false",
    onChange,
    id = "fname",
    ...props }) => {
    return (
        <div className="form-group row ">
            <label
                htmlFor="fname"
                className="col-sm-3 text-right control-label col-form-label"
                // className="col-sm-3  text-right control-label "
            >
                <FormattedMessage
                    id={label}
                    defaultMessage={label}
                />
            </label>
            <div className="col-sm-9 marginb">
                <textarea
                    {...props}
                    type={type}
                    className="form-control heightTextArea"
                    id={id}
                    placeholder={placeholder}
                    onChange={onChange} />
                {helperText === "false" ? '' :
                    <small
                        id="textHelp"
                        className="form-text text-muted">
                        {helperText}
                    </small>
                }
            </div>
        </div>
    )
}
export default FormTextArea;
