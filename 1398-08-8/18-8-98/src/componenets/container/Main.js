import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Breadcrumb from '../presentational/breadcrumb/Breadcrumb';
import ContainerFluid from '../Layout/content/ContainerFluid';
import Shipper from './Shipper';
import Row from '../presentational/Row';
import LoginForm from './LoginForm';
import DatePickerTest from './DatePickerTest';
import { connect } from 'react-redux';
import ShipmentTracking from './ShipmentTracking';
import Col from '../presentational/Col';
import logo from '../../img/shipper.png';
import { FormattedMessage } from 'react-intl';
import test from '../../img/horse.jpg'
import COD from '../container/COD'
import Button from '../presentational/button/Button';
import { Link } from 'react-router-dom';
class Main extends Component {
    componentDidMount() {
        if (localStorage.getItem("path")) {
            let path = JSON.parse(localStorage.getItem("path"))
            this.setState({
                path: path,
                // show: true
            })
            if (path == "/shipments") {
                this.setState({ show: false })
            }
            else if (path == "/shipments/view") {
                this.setState({ show: true })
            }
        }
        return (<Redirect to={{
            pathname: this.state.path,
        }} />)
    }

    constructor(props) {
        super(props);
        this.state = {
            path: '',
            valueSearchParam: null
        }
        //    this.setFinalSearchParam=this.setFinalSearchParam.bind(this) 
    }

    setFinalSearchParam() {
        alert("test")
    }
    render() {
        const { authentication, waybillNumber, redirect, searchParam } = this.props
        return (
            <>

                <AuthenticatedRoute
                    path={"/shipments/view/:waybillNumber"}
                    component={() => {
                        return <>
                            <ShipmentTracking waybillNumber={waybillNumber} />
                        </>
                    }}
                    authentication={authentication}
                />

                <AuthenticatedRoute
                    exact path={"/shipments/view"}
                    component={() => {
                        return <>
                            <ShipmentTracking waybillNumber={waybillNumber} />
                        </>
                    }}
                    authentication={authentication}
                />
                <AuthenticatedRoute
                    path={"/shipments/reports/COD"}
                    component={() => {
                        return <>
                            <Breadcrumb
                                title={"ReportCOD"}
                            />
                            <ContainerFluid >
                                <COD searchParam={searchParam} />
                            </ContainerFluid >
                        </>
                    }}
                    authentication={authentication}
                />

                <AuthenticatedRoute
                    exact path={"/shipments"}
                    component={() => {
                        return (<>
                            <Breadcrumb
                                nav={<Link to="shipments/reports/COD">

                                    <Button
                                        label="ReportCOD"
                                        buttonclass="waves-light btn-cyan" /></Link>}
                                title={

                                    <div class="d-flex flex-row comment-row m-t-0 ">
                                        <div class="p-2">
                                            <img src={logo} alt="(user)" className="rounded-circle" width="50"
                                                // className="nav-searchWaybillNumber" 
                                                class="rounded-circle"
                                            />
                                        </div>
                                        <div class="comment-text w-100 p-t-16">
                                            <FormattedMessage
                                                id={"Shipments"}
                                                defaultMessage={"Shipments"} />
                                        </div>
                                    </div>

                                }

                            />
                            <ContainerFluid >
                                <Row>
                                    <Shipper />
                                </Row>
                            </ContainerFluid >
                        </>)
                    }}
                    authentication={authentication}
                />
                <AuthenticatedRoute
                    exact path={"/"}
                    component={() => {
                        return (<>
                            <Breadcrumb
                                nav={<Link to="shipments/reports/COD">

                                    <Button
                                        label="ReportCOD"
                                        type="info"
                                        buttonclass="waves-light btn-cyan" /></Link>}

                                title={
                                    <Row>
                                        <Col md={1} xs={12}  >
                                            <img src={logo} alt="(user)" className="rounded-circle" width="60"
                                                className="nav-searchWaybillNumber"
                                            />
                                        </Col>
                                        <Col md={11} xs={12} className="padding-top" >
                                            <span>
                                                <FormattedMessage
                                                    id={"Shipments"}
                                                    defaultMessage={"Shipments"}
                                                />
                                            </span>
                                        </Col>
                                    </Row>
                                }
                            />
                            <ContainerFluid >
                                <Row>
                                    <Shipper setFinalSearchParam={() => { this.setFinalSearchParam() }} />
                                </Row>
                            </ContainerFluid >
                        </>)
                    }}
                    authentication={authentication}
                />
            </>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        waybillNumber: store.Reducer.waybillNumber,
        redirect: store.Reducer.redirect,
        searchParam: store.Reducer.searchParam,
    }
}

const AuthenticatedRoute = ({ component: Component, authentication, ...rest }) => (
    <Route {...rest} render={props => (
        JSON.parse(localStorage.getItem("authentication")) ? (
            <Component {...props} />
        ) : (<>
            <Redirect to={{
                pathname: '/login',
                state: props.location.pathname
            }} />
        </>)
    )} />
)

export default withRouter(connect(mapStateToProps)(Main))

