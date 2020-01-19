import React, { Component } from 'react'
import FormData from '../presentational/input/FormData';
import ViewData from '../presentational/input/ViewData';
import ViewLabel from '../presentational/input/ViewLabel';
import { connect } from 'react-redux';

class PersonDataView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: ''
        }
    }
    render() {
        const data = this.props.data
        // const showPhone=()=>{
        //     this.d

        // }
        return (
            <>
                <ViewLabel
                    value={<b>{data.name}</b>}
                />

                {(data.clientId || data.nationalId) &&
                    <div className="form-group row">
                        {data.clientId ?
                            <ViewData
                                label="clientId"
                                value={data.clientId}
                                pClassName={"widtdP"}
                                valueClassName="padding-right"
                            />
                            : ''
                        }

                        {data.clientId & data.nationalId ? <span className="viewDatataSplit">/</span> : ''}

                        {data.nationalId ?
                            <ViewData
                                label="nationalId"
                                value={data.nationalId}
                                valueClassName="padding-right"
                                pClassName={"widtdP"}
                            />
                            : ''
                        }

                    </div>
                }

                <ViewLabel
                    value={<><b> {data.city}</b>
                        <span className={"gray"}> ({data.country},{data.province})</span></>}
                />
                <ViewLabel
                    value={<>{data.address} </>}
                />

                <FormData
                    label="phone"
                    value={data.phones}
                    labelClassName=""
                    valueClassName="padding-right"

                />
                {data.postalCode ?
                    <FormData
                        label="postalCode"
                        value={data.postalCode}
                        labelClassName=""
                        valueClassName="padding-right"
                    /> : ""
                }
            </>
        )
    }
}


PersonDataView.defaultProps = {
    data: {
        city: "teuu"
    }
}

export default (PersonDataView);
