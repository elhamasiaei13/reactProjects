import React, { Component } from 'react'
import Table from '../presentational/table/Table';
import Card from '../presentational/card/Card';
import Api from '../../config/Api';
import FormDatePicker from '../presentational/input/FormDatePicker';
import FormData from '../presentational/input/FormData';
import Row from '../presentational/Row'
import Col from '../presentational/Col'
export default class COD extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: '1398-07-14',
            data: {}
        }

    }

    componentDidMount() {
        Api.get("/shipments/cod").then((response) => {
            this.setState({ data: response.data.data })
        })


    }

    showBody(title, value) {
        const sum = {
            codAmount: value.codAmountSum,
        }
        if (value.codAmountSum) {
            value.shipments.push(sum)
        }

        let arrayBody = []
        arrayBody.push(
            <li>
                <div className="COD_L_P" ><strong>{title}</strong>  </div>
                <Table
                    classTable=" table-striped table-hover"
                    // classHeader="bg-inverse text-white"
                    theader={['#', "waybillNumber",
                        "codAmount", "reference",
                        , "codPaymentReferenceInfo"]}


                    tbody={value.shipments}
                />
            </li>
        )
        return (
            <ul>
                {arrayBody}
            </ul>
        )

    }
    showCOD() {
        const { data } = this.state
        let array = []
        const date = ""
        let value = ""
        let method = ""
        let Naghd = ""
        let pos = ""
        let key = Object.keys(data).forEach((date, i) => {
            array.push(
                <>
                    <hr className="hrCard" />
                    <li className="COD_lable">
                        {date}
                    </li>
                </>
            )
            // date = v
            method = data[date]
            // console.log("v " + date + " i " + i);
            // console.log("method" + " " + JSON.stringify(method));
            Object.keys(method).forEach((KM, VM) => {

                array.push(
                    <li className="COD_body" >
                        {this.showBody(KM, method[KM])}

                    </li>
                )


            })
        })


        console.log("object.key(gata)", value);
        return (
            <ul className="not-bullet">
                {array}
            </ul>

        )

    }

    ShowSearchParam(searchparam) {
        console.log("searchparam", searchparam);
        let arraySP = []
        if (searchparam !== null) {
            if (searchparam.waybillNumber != null) {
                arraySP.push(
                    <Col md={12}>
                    
                        <FormData
                            label="waybillNumber"
                            value={searchparam.waybillNumber}
                            labelClassName="col-sm-1 "
                            valueClassName="col-md-11"
                            wrapperClassName={"m-r-1-69r"}
                        />
                    </Col>
                )
            }
            if (searchparam.issuingDateFrom != null) {
                arraySP.push(
                    <Col md={4}>
                        <FormDatePicker
                            disabled={true}
                            label={"issuingDateFrom"}
                            id="title2"
                            name='issuingDateTo'
                            value={searchparam.issuingDateFrom}
                            labelClassName="col-sm-4 "
                            valueClassName="col-md-8"
                        />
                    </Col>)
                console.log("issuingDateFrom", searchparam.issuingDateFrom);

            }
            if (searchparam.issuingDateTo != null) {
                arraySP.push(
                    <Col md={4}>
                        <FormDatePicker
                            disabled={true}
                            label={"issuingDateTo"}
                            id="title2"
                            name='issuingDateTo'
                            value={searchparam.issuingDateTo}
                            labelClassName="col-sm-4 "
                            valueClassName="col-md-8"
                        />
                    </Col>)
            }

            if (searchparam.paymentMethods != null) {
                const arraypaymentMethods = []
                searchparam.paymentMethods.map((item, index) => {
                    arraypaymentMethods.push(item.label + ",")
                })
                arraySP.push(
                    <Col md={4}>
                        <FormData
                            label="paymentMethods"
                            value={arraypaymentMethods}
                            labelClassName="col-sm-4 "
                            valueClassName="col-md-8"
                        />
                    </Col>)
            }

            if (searchparam.currentStates != null) {
                const arraycurrentStates = []
                searchparam.currentStates.map((item, index) => {
                    arraycurrentStates.push(item.label + ",")
                })
                arraySP.push(
                    <Col md={4}>
                        <FormData
                            label="currentStates"
                            value={arraycurrentStates}
                            labelClassName="col-sm-4 "
                            valueClassName="col-md-8"
                        />
                    </Col>)
            }
            if (searchparam.deliveryDateFrom != null) {
                arraySP.push(
                    <Col md={4}>
                        <FormDatePicker
                            disabled={true}
                            label={"deliveryDateFrom"}
                            id="title2"
                            name='issuingDateTo'
                            value={searchparam.deliveryDateFrom}
                            readOnly={true}
                            labelClassName="col-sm-4 "
                            valueClassName="col-md-8"
                        />
                    </Col>)
            }
            if (searchparam.deliveryDateTo != null) {
                arraySP.push(
                    <Col md={4}>
                        <FormDatePicker
                            disabled={true}
                            label={"deliveryDateTo"}
                            placeholder={"تاریخ صدور تا"}
                            id="title2"
                            name='issuingDateTo'
                            value={searchparam.deliveryDateTo}
                            labelClassName="col-sm-4 "
                            valueClassName="col-md-8"
                        /></Col>)
            }

            if (searchparam.consigneeCity != null) {
                const arrayconsigneeCity = []
                searchparam.consigneeCity.map((item, index) => {
                    arrayconsigneeCity.push(item.label + ", ")
                    arraySP.push(
                        <Col md={4}>
                            <FormData
                                label="consigneeCity"
                                value={arrayconsigneeCity}
                                labelClassName="col-sm-4 "
                                valueClassName="col-md-8"
                            />
                        </Col>)
                })
            }
            if (searchparam.COD != null) {
                arraySP.push(
                    <Col md={4}>

                        <FormData
                            label={"hasCOD?"}
                            value={searchparam.COD.label}
                            labelClassName="col-sm-4 "
                            valueClassName="col-md-8"
                        />
                    </Col >


                )
            }
        }
        return arraySP

    }
    render() {
        return (
            <Card><Row>
                {this.ShowSearchParam(this.props.searchParam)}
            </Row>
                {this.showCOD()}

            </Card>
        )
    }
}