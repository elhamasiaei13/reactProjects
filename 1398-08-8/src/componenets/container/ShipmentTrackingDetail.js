import React, { Component } from 'react'
import Card from '../presentational/card/Card'
import Table from '../presentational/table/Table';
import ShipperResultParts from './ShipperResultParts'
import ShipperPayment from './ShipperPayment'
import ShipperNumbers from './ShipperNumbers'
import Row from '../presentational/Row';
import Col from '../presentational/Col';
import ShipperStatus from '../presentational/timeLine/ShipperStatus';
import ShowImage from '../container/ShowImage';
import ShipperPersonData from './ShipperPersonData'
import * as actionCreator from '../../store/Action'
import { connect } from 'react-redux';
import PersonDataView from './PersonDataView';
import FormData from '../presentational/input/FormData';
import { FormattedMessage } from 'react-intl';
class ShipmentTrackingDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            show: false,
            shipper: {},
            paymentInfo: {},
            ShipperResultParts: {}
        }
    }

    render() {

        const data = this.props.data
        const { show } = this.props
        return (
            <> {show ?
                <>
                    <Card>
                        <Row>
                            <Col md={12} lg={6}>
                                <Row>
                                    <Col md={12} lg={12}>

                                        <h4 className="card-title text-info m-b-0" >فرستنده</h4>
                                        <hr className="hrCard" />
                                        <PersonDataView data={data.shipper} />
                                    </Col>

                                </Row>
                                <Row>
                                    <Col md={12} lg={12}>
                                        {/* <hr /> */}
                                        <FormData
                                            label="description"
                                            value={data.shipper.notes}
                                            labelClassName=""
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={12} lg={6}>
                                <Row>
                                    <Col md={12} lg={12}>
                                        <h4 className="card-title text-info m-b-0" >گیرنده</h4>
                                        <hr className="hrCard" />
                                        <PersonDataView data={data.consignee} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12} lg={12}>
                                        {/* <hr /> */}
                                        <FormData
                                            label="description"
                                            value={data.consignee.notes}
                                            labelClassName=""
                                        />
                                    </Col>
                                </Row>

                            </Col>
                        </Row>

                        {/* <Row>
                            <Col md={12} lg={6}>
                                <hr />
                                <FormData
                                    label="description"
                                    value={data.shipper.notes}
                                    labelClassName=""
                                />
                            </Col>

                            <Col md={12} lg={6}>
                                <hr />
                                <FormData
                                    label="description"
                                    value={data.consignee.notes}
                                    labelClassName=""
                                />
                            </Col>
                        </Row> */}
                    </Card>

                    <Row>
                        <Col md={12}>
                            <Card cardTitle={"parcels"} noHr={true}>
                                <Table
                                    classTable=" table-hover"
                                    theader={['partNumber', 'DIMs', 'grossWeight', "volumetricWeight", 'content'
                                        , 'packageType', 'declaredValue']}
                                    tbody={data.parcels}
                                    classHeader={"hiddenTopBorder"}
                                />
                                <ShipperResultParts data={data.parcels} />
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4} md={6} >

                            <Card cardTitle={"Shippingإare"} >
                                <ShipperPayment data={data.paymentInfo} />
                            </Card>
                        </Col>
                        <Col lg={4} md={6} >
                            <Card cardTitle={"COD"} >
                                <ShipperPayment data={data.paymentInfo} />
                            </Card>
                        </Col>
                        <Col lg={4} md={6} >
                            <Card cardTitle="ShipperNumbers" >
                                <ShipperNumbers data={data} />
                            </Card>
                        </Col>
                    </Row >

                    <Card >
                        <Row>
                            <Col lg={6} md={12} >
                                <h4 className="card-title text-info m-b-0" >
                                    <FormattedMessage
                                        id={"CurrentState&status"}
                                        defaultMessage={"CurrentState&status"}
                                    />
                                </h4>
                                <hr className="hrCard" />
                                <ShipperStatus data={data} />
                            </Col>
                            <Col md={12} lg={6} >
                                <h4 className="card-title text-info m-b-0" >
                                    <FormattedMessage
                                        id={"Signatureـofـreceiverـdeliveryـandـotherـimages"}
                                        defaultMessage={"Signatureـofـreceiverـdeliveryـandـotherـimages"}
                                    />
                                </h4>
                                <hr className="hrCard" />
                                <ShowImage data={data.attachments} />
                            </Col>

                        </Row > </Card>
                </>
                :
                <></>}
            </>)
    }
}

const mapStateToProps = (store) => {
    return {
        waybillNumber: store.Reducer.waybillNumber
    }
}

const mapDispachToProps = (dispach) => {
    return {
        set_waybillNumber: (value) => { dispach(actionCreator.SET_WAYBILLNUMBER(value)) },
    }
}

export default (connect(mapStateToProps, mapDispachToProps)(ShipmentTrackingDetail));


