import React, { Component } from 'react';
import Table from '../presentational/table/Table';
import Pagination from '../presentational/table/Pagination';
import Card from '../presentational/card/Card';
import SearchForm from '../container/SearchForm';
import Col from '../presentational/Col';
import * as actionCreator from '../../store/Action'
import { connect } from 'react-redux';
import ErrorHandeling from './ErrorHandeling';
import { withRouter, Route, Redirect } from 'react-router-dom';
import Api from '../../config/Api';
import Message from '../presentational/Message'
import { exportDefaultSpecifier } from '@babel/types';
class Shipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 1,
            data: [],
            message: null,
            page: 1,
            size: 10,
            loading: false,
        }
        this.changeData = this.changeData.bind(this)
        this.searchValue = this.searchValue.bind(this)
    }

    searchValue = (searchParam) => {
        this.props.SET_SearchParam(searchParam)
        if (searchParam.length !== 0) {
            const { page, size } = this.state
            this.getData(page, size, searchParam)
        }
    }

    componentDidMount() {
        this.getData()
    }

    changeData(page = 1, size) {
        this.state.page = page
        this.state.size = size
        this.setState({})
        this.getData(page, size, this.props.searchParam)
    }

    getData(page = 1, size = 10, searchParam = this.props.searchParam) {
        this.setState({ loading: true })
        let newsCOD = null
        let newcurrentStates = []
        let newsconsigneeCity = []
        let newpaymentMethods = []
        let search = ""
        if (searchParam !== null) {
            Object.keys(searchParam).forEach(function (key, index) {
                console.log(searchParam[key]);
                if (searchParam[key] != undefined) {
                    if (key === "currentStates") {
                        searchParam[key].map(item => {
                            newcurrentStates.push(item.value)
                        })
                        search = search + "&" + key + "=" + newcurrentStates
                    }
                    else if (key === "consigneeCitys") {
                        searchParam[key].map(item => {
                            newsconsigneeCity.push(item.value)
                        })
                        search = search + "&" + key + "=" + newsconsigneeCity
                    }
                    else if (key === "paymentMethods") {
                        searchParam[key].map(item => {
                            newpaymentMethods.push(item.value)
                        })
                        search = search + "&" + key + "=" + newpaymentMethods
                    }
                    else if (key === "COD") {
                        search = search + "&" + "hasCod" + "=" + searchParam[key].value
                    }
                    else if (key === "deliveryDateFrom" || key === "issuingDateTo" || key === "issuingDateFrom") {
                        search = search + "&" + key + "=" + searchParam[key].format('YYYY-MM-DD HH:mm')
                    }
                    else if (key === "waybillNumbers") { search = search + "&" + key + "=" + searchParam[key] }
                }
            });
        }
        this.props.SET_READYSEARCHPARAM(search)
        const { userName, password } = this.props
        return (
            Api.get("/shipments?" + "page=" + this.state.page + "&size=" + this.state.size + search, { userName: userName, password: password }).then(
                (response) => {
                    this.setState({
                        message: null,
                        total: response.data.data.total,
                        data: response.data.data.elements,
                        loading: false
                    })
                }
            ).catch((error) => {
                this.state.message = error.message
                this.state.loading = false
                this.setState({})
                if (error.statusCode == 401) {
                    this.props.SET_AUTHENTICATE(false)
                }
            })
        )
    }

    render() {
        const { data, total, message, loading } = this.state;
        const { searchParam } = this.props;
        return (
            <Col md={12} >
                <Card cardTitle="search">
                    <SearchForm searchParam={searchParam} searchValue={this.searchValue} />
                </Card>
                {message ? <Message message={message} />
                    :
                    <Card >

                        <Table
                            classTable=" table-striped table-hover"
                            classHeader="bg-inverse text-white"
                            theader={['#', "waybillNumber",
                                "issuingDate", "deliveryDate",
                                , "shipper", "shipperCity", "consignee",
                                "consigneeCity", "paymentMethod", "chargeParty", "currentState",
                                , "activity"]}
                            tbody={data}
                        />
                        <Pagination total={total} changeData={this.changeData} />

                    </Card>}
            </Col>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        userName: store.Reducer.userName,
        password: store.Reducer.password,
        searchParam: store.Reducer.searchParam,
    }
}

const mapDispachToProps = (dispach) => {
    return {
        SET_AUTHENTICATE: (value) => { dispach(actionCreator.SET_AUTHENTICATE(value)) },
        SET_SearchParam: (value) => { dispach(actionCreator.SET_SEARCHPARAM(value)) },
        SET_READYSEARCHPARAM: (value) => { dispach(actionCreator.SET_READYSEARCHPARAM(value)) },
    }
}
export default withRouter(connect(mapStateToProps, mapDispachToProps)(Shipper));
