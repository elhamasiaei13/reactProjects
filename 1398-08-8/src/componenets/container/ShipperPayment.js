import React, { Component } from 'react'
// import FormData from '../presentational/input/FormData';
import FormData from '../presentational/input/FormData';
export default class ShipperPayment extends Component {

    render() {
        const { data } = this.props
        return (
            <>
                <FormData
                    label="totalAmount"
                    value={data.shippingTotalAmount}
                    labelClassName="col-sm-4 "
                    valueClassName="col-md-8"
                />

                <FormData
                    label="paymentMethod"
                    value={data.shippingPaymentMethod}
                    labelClassName="col-sm-4 "
                    valueClassName="col-md-8"
              
                />

                <FormData
                    label="chargeParty"
                    value={data.shippingChargeParty}
                    labelClassName="col-sm-4 "
                    valueClassName="col-md-8"
                              />
                <FormData
                    label="paymentReferenceInfo"
                    value={data.shippingPaymentReferenceInfo}
                    labelClassName="col-sm-4 "
                    valueClassName="col-md-8"
                              />


            </>
        )
    }
}
ShipperPayment.defaultProps = {
    data: {
        totalAmount: 'totalAmount',
        paymentMethod: 'paymentMethod',
        chargeParty: 'chargeParty',
        paymentReferenceInfo: 'paymentReferenceInfo'
    }
}