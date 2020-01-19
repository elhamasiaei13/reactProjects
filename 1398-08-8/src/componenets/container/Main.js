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
// to={`/surveys/${survey.id}`}
// path="/surveys/:id" 

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

    componentWillReceiveProps() {
        const { waybillNumber } = this.props
        let path = this.props.history.location.pathname
        console.log("path,", path);
        if (path == "/shipments") {
            this.setState({ show: false })
        }
        else if (path == "/shipments/view/") {
            this.setState({ show: true })
        }
        else if (path == "/shipments/view/" + waybillNumber) {
            this.setState({ show: true })
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            path: '',
            show: false
        }
    }
    render() {
        const { show } = this.state
        const { authentication, waybillNumber, redirect, searchParam } = this.props
        return (
            <>
                {
                    show ?
                        <Redirect to={{
                            pathname: "/shipments/view/" + waybillNumber,
                        }} />
                        :
                        ''
                }

                <AuthenticatedRoute
                    exact path={"/"}
                    component={() => {
                        return <>
                            <Breadcrumb
                                title={"home"}
                            />
                            <ContainerFluid >
                                WelCome
                                </ContainerFluid >
                        </>
                    }}
                    authentication={authentication}
                />
                <AuthenticatedRoute
                    path={"/shipments/view/" + waybillNumber}
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
                                nav={<Link to="shipments/reports/COD"><Button
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
                                    <Shipper />
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

