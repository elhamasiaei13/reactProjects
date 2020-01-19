import React, { Component } from 'react'
import FormData from '../presentational/input/FormData';
import PersonDataView from '../container/PersonDataView';
import { connect } from 'react-redux';
import Row from '../presentational/Row'
class ShipperPersonData extends Component {
    render() {
        const data = this.props.data

        return (
            <div>
                <PersonDataView data={data} />
                <hr className="hrCard" />
                <FormData
                    label="description"
                    value={data.notes}
                    labelClassName=""
                />
            </div>
        )
    }
}
export default (ShipperPersonData);
