import React, { Component } from 'react'
// import FormData from '../presentational/input/FormData';
import FormData from '../presentational/input/FormData';
export default class ShipperCOD extends Component {

    render() {
        const { data } = this.props
        return (
            <>
                <FormData
                    label="codAmount"
                    value={data.codAmount}
                    labelClassName="col-sm-5 "
                    valueClassName="col-md-7"
                />

                <FormData
                    label="codPaymentReferenceInfo"
                    value={data.codPaymentReferenceInfo}
                    labelClassName="col-sm-5 "
                    valueClassName="col-md-7"
              
                />

                <FormData
                    label="tohi"
                    // value={data.shippingChargeParty}
                    labelClassName="col-sm-4 "
                    valueClassName="col-md-8"
                              />
                <FormData
                    label="tohi"
                    // value={data.shippingPaymentReferenceInfo}
                    labelClassName="col-sm-4 "
                    valueClassName="col-md-8"
                              />


            </>
        )
    }
}
ShipperCOD.defaultProps = {
    data: {
        totalAmount: 'totalAmount',
        paymentMethod: 'paymentMethod',
        chargeParty: 'chargeParty',
        paymentReferenceInfo: 'paymentReferenceInfo'
    }
}