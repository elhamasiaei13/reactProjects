import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl';
import { Link, withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';
import * as actionCreator from '../../../store/Action';
import eye from '../../../img/eye.png';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 1
        }
        this.CreateBody = this.CreateBody.bind(this)
    }

    CreateHeader = (theader) => {
        const head = []
        theader.map((item, index) => {
            head.push(<th style={item === "shipper" ? { "width": "300px" } :
                item === "consignee" ? { "width": "300px" } : item === "#" ?
                    { "width": "100px" } : item === "issuingDate" ?
                        { "width": "300px" } : { "width": "200px" }} key={item} scope="col">
                <FormattedMessage
                    id={item}
                    defaultMessage={item}
                />
            </th>)
        })
        return head;
    }

    testArray = (test) => {
        test.map((item) => {
            return <td>{item}</td>
        })
    }

    CreateBody = (tbody, theader) => {
        let i = 1
        const body = [];
        tbody.map((row, index) => {
            const waybillNumber = row.waybillNumber
            let keyWrapper = ''
            if (row.partNumber) {
                i++
                keyWrapper = row.partNumber
            } else {
                i++
                keyWrapper = waybillNumber + i
            }
            body.push(<tr
                key={keyWrapper}>
                {theader.map((colmn) => {
                    if (colmn === "#") {
                        ++i
                        return <td
                            key={index + i + 1}
                            scope="row">{index + 1}</td>
                    }
                    else if (colmn == "waybillNumber") {
                        ++i
                        return <td
                            key={index + 2 + i}
                            onClick={() =>
                                this.props.set_waybillnumber(waybillNumber)
                            } scope="row">
                            <Link to={`/shipments/view/${row.waybillNumber}`} 
                            // to={"/shipments/view/" + row.waybillNumber}
                            >
                            {waybillNumber}
                            </Link>
                        </td>
                    }
                    else if (colmn == "activity") {
                        ++i
                        return <td
                            key={index + 2 + i}
                            onClick={() =>
                                this.props.set_waybillnumber(waybillNumber)
                            } scope="row">
                            <Link  to={`/shipments/view/${row.waybillNumber}`}
                            //  to={"/shipments/view/" + row.waybillNumber}
                             >
                                <img src={eye} width="30" alt="view" />
                            </Link>
                        </td>
                    }
                    else if (colmn === "DIMs") {
                        i++
                        return (<td
                            key={index + 3 + i}>{row.width} * {row.height}* {row.length}
                            {" "}
                            <FormattedMessage
                                id={"cm"}
                                defaultMessage={"cm"}
                            />
                        </td>)
                    }

                    else if (colmn === "chargeParty") {
                        i++
                        const viewClass = row.chargeParty == "پس کرایه" ? 'badge-danger' : 'label-success'
                        return (<td
                            key={index + i + row.chargeParty}>
                            <span
                                className={"label label-rounded " + viewClass} >
                                {row.chargeParty}
                            </span>
                        </td>)
                    }
                    else if (colmn === "paymentMethod") {
                        const viewClass = row.paymentMethod == "نقد" ? 'label-success' :
                            row.paymentMethod == "اعتباری" ? 'label-info' : 'label-green'
                        return (<td
                            key={index + 5 + row.paymentMethod}>
                            <span
                                className={"label label-rounded " + viewClass} >
                                {row.paymentMethod}
                            </span>
                        </td>)
                    }
                    else if (colmn === "volumetricWeight") {
                         return (<td
                            key={index+row.volumetricWeight + 3 + i}>{row.volumetricWeight} 
                            {" "}
                            <FormattedMessage
                                id={"kg"}
                                defaultMessage={"kg"}
                            />
                        </td>)
                    }
                    else if (colmn ===  "grossWeight") {
                         return (<td
                            key={index +row.grossWeight + 3 + i}>{row.grossWeight}
                            {" "}
                            <FormattedMessage
                                id={"kg"}
                                defaultMessage={"kg"}
                            />
                        </td>)
                    }
                    else if (colmn ===  "declaredValue") {
                         return (<td
                            key={index +row.declaredValue + 3 + i}>{row.declaredValue}
                            {" "}
                            <FormattedMessage
                                id={"rial"}
                                defaultMessage={"rial"}
                            />
                        </td>)
                    }
                    else {
                        i++
                        return <td key={keyWrapper + row[colmn] + i} >{row[colmn]}</td>

                    }
                })}
            </tr>)
        })
        return body;
    }

    render() {
        const { to, tbody, ...rest } = this.props;
        const { theader, classTable, classHeader, classBody, ...props } = this.props
        return (
            <div className="table-responsive " >
                <table className={"table table-hover " + classTable} >
                    <thead className={classHeader}>
                        <tr>
                            {this.CreateHeader(theader)}
                        </tr>
                    </thead>
                    <tbody key={tbody} className={classBody}>
                        {this.CreateBody(tbody, theader)}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapDispachToProps = (dispach) => {
    return {
        set_waybillnumber: (value) => { dispach(actionCreator.SET_WAYBILLNUMBER(value)) }
    }
}

Table.defaultProps = {
    classHeader: '',
    classTable: '',
    classBody: ''
}
export default withRouter(connect(null, mapDispachToProps)(Table))

