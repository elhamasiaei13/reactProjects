import React, { Component } from 'react'
import TimeLine from './TimeLine'
import TimeLineLabel from './TimeLineLabel'
import Card from '../card/Card'
import Row from '../Row'
import Col from '../Col';
import FormData from '../input/FormData';
import ViewData from '../input/ViewData';
import { FormattedMessage } from 'react-intl';
export default class ShipperStatus extends Component {

    showPartNumber(arg) {
        const array = []
        const length = arg.length
        var i = 0
        arg.map((item, index) => {
            i++
            if (i == length) {
                array.push(
                    <span key={index + item} className={"myapp-p-r-5"}>
                        {item}
                    </span>
                )
            } else {
                array.push(
                    <span key={index + item} className={"myapp-p-r-5"}>
                        {item} ,
                    </span>
                )
            }
        })
        return array
    }

    showHistory() {
        const array = []
        const history = this.props.data.trackingInfo.history
        const totalPieces = this.props.data.trackingInfo.totalPieces
        let lastItem = { localDate: '' }
        let i = 41000
        history.map((item,index) => {
            if (item.localDate !== lastItem.localDate) {
                array.push(
                    <TimeLineLabel key={"trackingHistoriId"+index } value={item.localDate} />
                )
            }
            array.push(
                <TimeLine key={"trackingHistor"+index }
                    title={<>
                        {item.count} {"  "} از {"  "} {totalPieces} {"  "}
                        بسته{" : "}
                        <FormattedMessage
                            id={item.state}
                            defaultMessage={item.state}
                        />
                    </>}
                    clock={item.localDateTime}
                    address={item.location}
                    iconName={
                        item.state == "ISSUED" ? "fa-file bg-green" :
                            item.state == "DRAFT" ? "fa-file" :
                                item.state == "MANIFESTED" ? "fa-book bg-maroon" :
                                    item.state == "IN_TRANSIT" ? "fa-plane bg-yellow" :
                                        item.state == "CONFIRMED_PICKUP_REQ" ? "fa-envelope bg-orange" :
                                            item.state == "VOIDED" ? "fa-ban bg-red" :
                                                item.state == "IN_WAREHOUSE" ? "fa-building bg-teal" :
                                                    item.state == "DELIVERED" ? "fa-home bg-olive" :
                                                        item.state == "NOT_DELIVERED" ? "fa-thumbs-down bg-teal" :
                                                            item.state == "RETURNED" ? "fa-thumbs-down bg-navy" :
                                                                item.state == "MASTERED" ? "fa-book bg-blue" :
                                                                    item.state == "OFFLOADED" ? "fa-book bg-red" :
                                                                        item.state == "OUT_FOR_DELIVERY" ?
                                                                            "fa-truck bg-purple"
                                                                            : ''
                    }
                />
            )
            lastItem = item
        })
        return array
        // return( <TimeLineLabel value={item.localDate} />)
    }

    showStatus() {
        const array = []
        const total = this.props.data.trackingInfo.totalPieces
        const item = this.props.data.trackingInfo.current
        let i = 81000
        return (<>
            <li key={ "currentprent" + i} className="form-group row">
                <ViewData
                    key={ item.state + i}
                    value={<>
                        <i className="m-r-10 mdi mdi-checkbox-blank-circle m-r-12 text-cyan font-7"></i>
                        {item.count} از {total} بسته
                               {" "}
                        <span className={"label label-rounded " +
                            item.state == "ISSUED" ? "label label-rounded  bg-green" :
                            item.state == "DRAFT" ? "label label-rounded fa-file" :
                                item.state == "MANIFESTED" ? "label label-rounded  bg-maroon" :
                                    item.state == "IN_TRANSIT" ? "label label-rounded  bg-yellow" :
                                        item.state == "CONFIRMED_PICKUP_REQ" ? "label label-rounded  bg-orange" :
                                            item.state == "VOIDED" ? "label label-rounded  bg-red" :
                                                item.state == "IN_WAREHOUSE" ? "label label-rounded  bg-teal" :
                                                    item.state == "DELIVERED" ? "label label-rounded bg-olive" :
                                                        item.state == "NOT_DELIVERED" ? "label label-rounded  bg-teal" :
                                                            item.state == "RETURNED" ? "label label-rounded  bg-navy" :
                                                                item.state == "MASTERED" ? "label label-rounded  bg-blue" :
                                                                    item.state == "OFFLOADED" ? " bg-red" :
                                                                        item.state == "label label-rounded  OUT_FOR_DELIVERY" ?
                                                                            "label label-rounded   bg-purple"
                                                                            : ''}
                        >

                            <FormattedMessage
                                id={item.state}
                                defaultMessage={item.state}
                            /></span>{" "}
                        {item.location}
                    </>}
                    pClassName={"width-330  "}
                    valueClassName="padding-right"
                    icon={true}
                />
            </li>
            <li key={ "currentpartsNumbers" + i} className=" m-r-myapp-25 font-color ">
                <i className="m-r-10 mdi mdi-checkbox-blank-circle-outline m-r-12 text-cyan font-7"></i>
                {this.showPartNumber(item.partNumbers)}
            </li>
            {item.comment == "" ?
                <div className="m-b-app"></div>
                :
                <li key={ "comment" + i} className="m-b-app m-r-myapp-25 font-color ">
                    <i className="m-r-10 mdi mdi-checkbox-blank-circle-outline m-r-12 text-cyan font-7"></i>

                    {item.comment}
                </li>
            }

        </>)
        // data.map((item, index) => {
        //     i++
        //     array.push(
        //         <>
        //             <li key={index + item.state + "prent" + i} className="form-group row">
        //                 <ViewData
        //                     key={index + item.state + i}
        //                     value={<>
        //                         <i className="m-r-10 mdi mdi-checkbox-blank-circle m-r-12 text-cyan font-7"></i>
        //                         {item.count} از {total} بسته
        //                    {" "}
        //                         <span className={"label label-rounded " +
        //                             item.state == "ISSUED" ? "label label-rounded  bg-green" :
        //                             item.state == "DRAFT" ? "label label-rounded fa-file" :
        //                                 item.state == "MANIFESTED" ? "label label-rounded  bg-maroon" :
        //                                     item.state == "IN_TRANSIT" ? "label label-rounded  bg-yellow" :
        //                                         item.state == "CONFIRMED_PICKUP_REQ" ? "label label-rounded  bg-orange" :
        //                                             item.state == "VOIDED" ? "label label-rounded  bg-red" :
        //                                                 item.state == "IN_WAREHOUSE" ? "label label-rounded  bg-teal" :
        //                                                     item.state == "DELIVERED" ? "label label-rounded bg-olive" :
        //                                                         item.state == "NOT_DELIVERED" ? "label label-rounded  bg-teal" :
        //                                                             item.state == "RETURNED" ? "label label-rounded  bg-navy" :
        //                                                                 item.state == "MASTERED" ? "label label-rounded  bg-blue" :
        //                                                                     item.state == "OFFLOADED" ? " bg-red" :
        //                                                                         item.state == "label label-rounded  OUT_FOR_DELIVERY" ?
        //                                                                             "label label-rounded   bg-purple"
        //                                                                             : ''}
        //                         >

        //                             <FormattedMessage
        //                                 id={item.state}
        //                                 defaultMessage={item.state}
        //                             /></span>{" "}
        //                         {item.location}
        //                     </>}
        //                     pClassName={"width-330  "}
        //                     valueClassName="padding-right"
        //                     icon={true}
        //                 />
        //             </li>
        //             <li key={index + item.state + "partsNumbers" + i} className=" m-r-myapp-25 font-color ">
        //                 <i className="m-r-10 mdi mdi-checkbox-blank-circle-outline m-r-12 text-cyan font-7"></i>
        //                 {this.showPartNumber(item.partsNumbers)}
        //             </li>
        //             {item.comment == "" ?
        //                 <div className="m-b-app"></div>
        //                 :
        //                 <li key={index + item.state + "comment" + i} className="m-b-app m-r-myapp-25 font-color ">
        //                     <i className="m-r-10 mdi mdi-checkbox-blank-circle-outline m-r-12 text-cyan font-7"></i>

        //                     {item.comment}
        //                 </li>
        //             }

        //         </>
        //     )
        // })
        // return array

    }
    render() {
        const { data } = this.props
        return (
            <Row>
                <Col md={12} lg={12} >

                    <Card cardClass=" " cardBodyClass="myap-p-t-0" >
                        <ul key="uls1" className="list-style-none">
                            {this.showStatus()}
                        </ul>

                        <ul key="uls2" className="timeline card text-black bg-light">
                            {this.showHistory()}
                        </ul>
                    </Card>
                </Col>
            </Row>
        )
    }
}
