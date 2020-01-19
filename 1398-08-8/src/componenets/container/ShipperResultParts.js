import React, { Component } from 'react'
import ShipperResultPartsItem from '../presentational/input/ShipperResultPartsItem';
import Col from '../presentational/Col';
import Row from '../presentational/Row';
export default class ShipperResultParts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grossWeight: 0,
            partNumber: 0,
            declaredValue: 0,
            totalPiece: 0,
        }
    }

    componentDidMount() {
        this.calulate()
    }

    calulate() {
        let grossWeight = 0
        let partNumber = 0
        let declaredValue = 0
        let totalPiece = 0
        this.props.data.map((row) => {
            grossWeight = row.grossWeight + grossWeight
            partNumber = row.partNumber + partNumber
            declaredValue = row.declaredValue + declaredValue
            totalPiece = totalPiece + 1
        })
        this.setState({ grossWeight: grossWeight })
        this.setState({ partNumber: partNumber })
        this.setState({ totalPiece: totalPiece })
        this.setState({ declaredValue: declaredValue })
    }

    render() {
        const { label, value } = this.props
        const { grossWeight, partNumber, totalPiece, declaredValue } = this.state
        return (
            <Row>
                <Col md={3} sm={6}>
                    <ShipperResultPartsItem
                        iconName="fas fa-qrcode"
                        iconClass="text-info"
                        label="totalPiece"
                        value={totalPiece}
                        unit="number"
                    />
                </Col>
                <Col md={3} sm={6}>
                    <ShipperResultPartsItem
                    iconName="fas fa-weight"
                        label="totalGrossWeight"
                        value={grossWeight}
                        iconClass="text-cyan"
                        unit="kg"

                    />
                </Col>
                <Col md={3} sm={6}>
                    <ShipperResultPartsItem
                    fab fa-dribbble-square
                    iconName="fab fa-dribbble-square"
                        label="totalVolumetricWeight"
                        value={declaredValue}
                        iconClass="text-success"
                        unit="kg"

                    />
                </Col>
                <Col md={3} sm={6}>
                    <ShipperResultPartsItem
                        label="totalDeclaredValue"
                        value={declaredValue}
                        iconName="mdi mdi-currency-usd"
                        iconClass="text-primary"
                        unit="rial"

                    />
                </Col>
            </Row>
        )
    }
}

// import React from 'react'
// import ShipperResultPartsItem from '../presentational/input/ShipperResultPartsItem';
// import Col from '../presentational/Col';
// import Row from '../presentational/Row';
// export default function ShipperResultParts({
//     label = "false",
//     value = "",
//     ...props }) {

//     return (
//         <Row>
//             <Col md={3} sm={6}>
//                 <ShipperResultPartsItem
//                     label="totalPiece"
//                     value="30.5"
//                 />
//             </Col>
//             <Col md={3} sm={6}>
//                 <ShipperResultPartsItem
//                     label="totalGrossWeight"
//                     value="30.5"
//                 />
//             </Col>
//             <Col md={3} sm={6}>
//                 <ShipperResultPartsItem
//                     label="totalVolumetricWeight"
//                     value="30.5"
//                 />
//             </Col>
//             <Col md={3} sm={6}>
//                 <ShipperResultPartsItem
//                     label="totalDeclaredValue"
//                     value="30.5ریال"
//                 />
//             </Col>
//         </Row>
//     )
// }
