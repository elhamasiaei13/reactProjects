import React, { Component } from 'react';
import Table from '../presentational/table/Table';
import Pagination from '../presentational/table/Pagination';
import Card from '../presentational/card/Card';
import SearchForm from '../container/SearchForm';
import Col from '../presentational/Col';
import * as actionCreator from '../../store/Action'
import { connect } from 'react-redux';
import Api from '../../config/Api';
import ErrorHandeling from './ErrorHandeling';
import { withRouter, Route, Redirect } from 'react-router-dom';
class Shipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // searchField: null,
            total: 1,
            data: []
        }
        this.changeData = this.changeData.bind(this)
    }

    searchValue = (data = [], searchParam=null) => {
        this.setState({ data: data })
        this.props.SearchParam(searchParam)
    }

    componentDidMount() {
        this.getData()
    }

    changeData(page = 1, size = 2) {
        console.log("page",page,"size",size);
        this.getData(page, size)
    }

    getData(page = 1, size = 2) {
        const { userName, password } = this.props
        console.log("getData", this.props);
        return (
            Api.get("/shipments?" + "page=" + page + "&size=" + size, { userName: userName, password: password }).then(
                (response) => {
                    this.setState({ total: response.data.data.total, data: response.data.data.elements })
                }
            ).catch((err) => {
                // ErrorHandeling.handleCatch(err, this.props)
                // this.props.SET_AUTHENTICATE(false)
                if (err.message == "Network Error") {
                    this.props.SET_AUTHENTICATE(false)
                }

                console.log("error:[", err,
                    "]err.status:[", err.status,
                    "]err.message:[", err.message,
                    "]err.code:[", err.code,
                    "]err.response:[", err.response
                )
            })
        )
    }

    render() {
        const { data, total } = this.state;
        const { searchParam } = this.props;
        return (
            <Col md={12} >
                <Card cardTitle="search">
                    <SearchForm searchParam={searchParam} searchValue={this.searchValue} />
                </Card>
                {/* <button onClick={()=>}> test api</button> */}
                <Card >
                    <Table
                        classTable=" table-striped table-hover"
                        classHeader="bg-inverse text-white"
                        theader={['#', "waybillNumber",
                            "issuingDate", "deliveryDate",
                            , "shipper", "shipperCity", "consignee",
                            "consigneeCity", "paymentMethod", "chargeParty", "currentState",
                            , "activity"]}
                        // tbody={this.state.dataArray}
                        tbody={data}
                    />
                    <Pagination total={total} changeData={this.changeData} />
                </Card>
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
        SearchParam: (value) => { dispach(actionCreator.SET_SEARCHPARAM(value)) },
    }
}
export default withRouter(connect(mapStateToProps, mapDispachToProps)(Shipper));
// export default (Shipper);
