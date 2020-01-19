import React, { Component } from 'react'
// import FormData from '../presentational/input/FormData';
import FormData from '../presentational/input/FormData';

export default class ShipperNumbers extends Component {

    render() {
        const { data } = this.props
        return (
            <>
                <FormData
                    label="refrense number"
                    value={data.reference}
                    labelClassName="col-sm-4 "
                    valueClassName="col-md-8"
                />
                <FormData
                    label="Tracking Code"
                    value={data.trackingNumber}
                    labelClassName="col-sm-4 "
                    valueClassName="col-md-8"
                /> 
                <FormData
                    label="pickup number"
                    value={data.pickupNumber}
                    labelClassName="col-sm-4 "
                    valueClassName="col-md-8"
                />
                <FormData
                    label="payment refrence info"
                    value={data.forwarderReferenceNumber}
                    labelClassName="col-sm-4 "
                    valueClassName="col-md-8"
                />

            </>
        )
    }
}
ShipperNumbers.defaultProps = {
    data: {
        totalAmount: 'totalAmount',
        paymentMethod: 'paymentMethod',
        chargeParty: 'chargeParty',
        paymentReferenceInfo: 'paymentReferenceInfo'
    }
}