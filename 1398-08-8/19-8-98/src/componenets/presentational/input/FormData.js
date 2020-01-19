import React from 'react'
import { FormattedMessage } from 'react-intl';

const FormData = ({
    label = "false",
    value = "false",
    labelClassName = "col-sm-3",
    valueClassName = "col-md-9",
    pclassName = "",
    wrapperClassName = "",
    ...props }) => {
    return (
        <div className={"form-group row " + wrapperClassName}>
            {label !== "false" ? <label
                htmlFor="fname"
                className={"control-label  col-form-label  text-right " + labelClassName}
            >

                {" "}
                {label === "tohi" ? <>&nbsp;</> :
                    <>
                        <FormattedMessage
                            id={label}
                            defaultMessage={label}
                        />:
                    </>}
            </label> : ''}
            {value !== "false" ?
                <div className={" " + valueClassName}>
                    <p className={"form-control " + pclassName}> {value} </p>
                </div>
                : ''}

        </div>

    )
}
export default FormData;
