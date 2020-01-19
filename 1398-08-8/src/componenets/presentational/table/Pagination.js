import React, { Component } from 'react'
import Pagination from "react-js-pagination";
import ReactPaginate from 'react-paginate';
import Row from '../Row'
import Col from '../Col'
import { FormattedMessage } from 'react-intl';
// import "bootstrap/less/bootstrap.less";

export default class Pagination1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      itemsCountPerPage: 2
    };
  }

  handlePageChange(pageNumber) {
    const page = pageNumber.selected + 1
    this.props.changeData(page, 2)
  }

  handleChange(pageNumber) {
    const size = this.state.itemsCountPerPage;
    this.setState({ activePage: pageNumber });
    this.props.changeData(pageNumber, size)

  }

  render() {
    // const pageCount=total 
    return (
      <Row>

        <Col md={2}>
          <div className="form-group row">
            <label
              htmlFor="fname"
              className={"control-label  col-form-label  text-right col-sm-5 "}
            >
              <FormattedMessage
                id={"size"}
                defaultMessage={"size"}
              />

            </label>
          
            <div className={"col-sm-7"}>
              <select class="custom-select" onChange={(e) => {
                this.setState({ itemsCountPerPage: e.target.value })
                this.props.changeData(1, e.target.value)
              }}>
                <option value="10" selected="">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>

          </div>

        </Col>


        <Col md={10}>
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={this.state.itemsCountPerPage}
            totalItemsCount={this.props.total}
            pageRangeDisplayed={10}
            onChange={(pageNumber) => this.handleChange(pageNumber)}
            activeClass="active"
          />
        </Col>
      </Row>
    );
  }
}
