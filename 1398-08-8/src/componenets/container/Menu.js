import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import MenuItem from '../sider/MenuItem';
import { connect } from 'react-redux';
import * as actionCreator from '../../store/Action'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shipment: false,
            shipmentTracking: false
        }
        // this.changeActive = this.changeActive.bind(this)
    }

    changeActive(arg) {
        if (arg == "/shipments") {
            this.setState({ shipmentTracking: false })
            this.setState({ shipment: true })
        }
        else if (arg == "/shipments/view") {
            this.setState({ shipment: false })
            this.setState({ shipmentTracking: true })

        }
    }
    render() {
        const { waybillNumber } = this.props
        const { shipmentTracking, shipment } = this.state
        return (
            <>
                <Link
                    to={{
                        pathname: "/shipments",
                        state: false
                    }}
                    // to="/shipments"
                    onClick={() => { this.changeActive("/shipments") }}

                >

                    <MenuItem
                        classMenu={shipment ? "active" : ''}
                        title={"listShipments"}
                        icon={"mdi mdi-map"}
                    />
                </Link>

                <Link
                    to={{
                        pathname: "/shipments/view/" + waybillNumber,
                        state: true
                    }}
                    // to={"/shipments/view/" + waybillNumber}
                    onClick={() => {
                        this.changeActive("/shipments/view")
                        this.props.set_waybillNumber(" ")
                    }}
                >
                    <MenuItem
                        classMenu={shipmentTracking ? "active" : ''}
                        title={"ShipmentTracking"}
                    />
                </Link>


            </>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        waybillNumber: store.Reducer.waybillNumber,
    }
}


const mapDispachToProps = (dispach) => {
    return {
        data_tracking: (value) => { dispach(actionCreator.SET_DATA_TRACKING(value)) },
        set_waybillNumber: (value) => { dispach(actionCreator.SET_WAYBILLNUMBER(value)) },
        SET_AUTHENTICATE: (value) => { dispach(actionCreator.SET_AUTHENTICATE(value)) },
    }
}




export default withRouter(connect(mapStateToProps, mapDispachToProps)(Menu));

