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
                    // labelClassName=" "
                    // valueClassName="col-md-3"
                />
                <FormData
                    label="Tracking Code"
                    value={data.trackingNumber}
                    // labelClassName=" "
                    // valueClassName="col-md-3"
                /> 
                <FormData
                    label="pickup number"
                    value={data.pickupNumber}
                // labelClassName=" "
                // valueClassName="col-md-3"
                />
                <FormData
                    label="payment refrence info"
                    value={data.forwarderReferenceNumber}
                    // labelClassName=" "
                    // valueClassName="col-md-3"
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