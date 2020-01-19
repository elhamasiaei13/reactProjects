import React, { Component } from 'react'
import ShipmentTrackingDetail from './ShipmentTrackingDetail'
import { connect } from 'react-redux';
import Breadcrumb from '../presentational/breadcrumb/Breadcrumb';
import Breadcrumblayout from '../presentational/breadcrumb/Breadcrumblayout';
import ShipmentActionBar from './ShipmentActionBar';
import { FormattedMessage } from 'react-intl';
import SearchWaybillNumber from './SearchWaybillNumber';
import ContainerFluid from '../content/ContainerFluid';
import logo from '../../img/shipper.png';
import Row from '../presentational/Row';
import Card from '../presentational/card/Card';
import Col from '../presentational/Col';
import * as actionCreator from '../../store/Action';
import ErrorHandeling from '../container/ErrorHandeling';
import { withRouter, Route, Redirect } from 'react-router-dom';
import Api from '../../config/Api';
import Message from '../presentational/Message'

class ShipmentTracking extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false, data: [], status: 'null', message: null }
    }

    componentDidMount() {
        const { waybillNumber, userName, password } = this.props
        if (waybillNumber !== " ") {
            Api.get('/shipments/' + this.props.waybillNumber, { userName: userName, password: password }).then(response => {
                this.state.data = response.data.data
                this.state.status = "found"
                this.state.show = true
                this.setState({})
                this.setState({ show: true })
            }).catch((error) => {
                console.log("eror", error.message);
                if (error.statusCode == 401) {
                    this.props.SET_AUTHENTICATE(false)
                }
                // if (error.message == "Network Error") {
                //     this.props.SET_AUTHENTICATE(false)
                // }
                // this.state.status = "notFound"
                this.state.show = false
                this.state.message = error.message
                this.setState({})
            })
        }
    }

    render() {
        const { waybillNumber } = this.props
        const { show, data, status, message } = this.state
        return (
            <>
                <Breadcrumblayout
                    // nav={<ShipmentActionBar />}
                    title={
                        <Row>
                            <Col md={1} xs={12}  >
                                <img src={logo} alt="(user)" className="rounded-circle" width="60"
                                    className="nav-searchWaybillNumber"
                                />
                            </Col>
                            <Col md={11} xs={12} className="padding-top" >
                                <SearchWaybillNumber waybillNumber={waybillNumber} />
                            </Col>
                        </Row>
                    }
                />

                <ContainerFluid >
                    {message && <Message message={message} />}
                    {status == "null"
                        ?
                        <Row>
                            <Col md={12}>
                            </Col>
                        </Row>
                        : status == "notFound" ?
                            <Row>
                                <Col md={12}>
                                    <Card cardBodyclassName=" bg-cyan text-white text-center">
                                        please input correct waybill number
                                        notfound
                                </Card>
                                </Col>
                            </Row>
                            :
                            <>
                                <ShipmentTrackingDetail
                                    waybillNumber={"waybillNumber"}
                                    data={data}
                                    show={this.state.show}
                                />
                            </>
                    }
                </ContainerFluid >
            </>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        waybillNumber: store.Reducer.waybillNumber,
        userName: store.Reducer.userName,
        password: store.Reducer.password
    }
}


const mapDispachToProps = (dispach) => {

    return {
        set_waybillNumber: (value) => { dispach(actionCreator.SET_WAYBILLNUMBER(value)) },
        SET_AUTHENTICATE: (value) => { dispach(actionCreator.SET_AUTHENTICATE(value)) },

    }
}


export default withRouter(connect(mapStateToProps, mapDispachToProps)(ShipmentTracking));
