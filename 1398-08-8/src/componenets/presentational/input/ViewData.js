import React from 'react'
import { FormattedMessage } from 'react-intl';

const ViewData = ({
    label = "false",
    value = false,
    labelClassName = "col-sm-3",
    valueClassName = " ",
    pClassName = " ",
    icon = false,
    ...props }) => {
    return (
        <>
            {value !== false
                ?
                <>
                    {label !== "false" ?

                        <label
                            htmlFor="fname"
                            className={"control-label col-form-label "}
                        >
                            {icon ?

                                <i className="fas fa-circle m-r-12 text-cyan font-7"></i>
                                :

                                ''
                            }

                            <FormattedMessage
                                id={label}
                                defaultMessage={label}
                            />
                            {" : "}

                        </label> : ''}
                    {value == "null" ?
                        '' : <>
                            <div className={"col-md-2  " + valueClassName}>
                                <p className={"form-control viewData  " + pClassName}> {value} </p>
                            </div>
                        </>
                    }

                </>
                :
                ''}

        </>

    )
}
export default ViewData;

