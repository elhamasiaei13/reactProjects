import React, { Component } from 'react'
import Form from '../presentational/form/Form'
import FormTextArea from '../presentational/input/FormTextArea'
import Select from '../presentational/input/Select'
import FormDatePicker from '../presentational/input/FormDatePicker'
import Button from '../presentational/button/Button';
import ButtonGroup from '../presentational/button/ButtonGroup';
import moment from 'moment-jalaali'
import DatePicker from 'react-datepicker2';
import Row from '../presentational/Row'
import Col from '../presentational/Col'
import CardBody from '../presentational/card/CardBody'

export default class SearchForm extends Component {
    initialState = {
        waybillNumber: null,
        // waybillNumberFrom: null,
        // waybillNumberTo: null,
        issuingDateFrom: null,
        issuingDateTo: null,
        paymentMethod: null,
        currentStates: null,
        deliveryDateFrom: null,
        deliveryDateTo: null,
        paymentMethods: null,
        // currentShipmentState: null,
        consigneeCity: null,
        openMenu: false,
        inputValueCity: null,
        myDateTime: null,
        COD: null,
        optionsCity: [
            { value: 'shiraz', label: 'shiraz' },
            { value: 'tehran', label: 'tehran' }
        ]
    }

    constructor(props) {
        super(props);
        this.reset = this.reset.bind(this);
        this.state = this.initialState
    }

    componentDidMount() {
        console.log("componentDidMount", this.props);
        const { searchParam } = this.props
        if (searchParam !== null) {
            this.setState({
                waybillNumber: searchParam.waybillNumber,
                issuingDateFrom: searchParam.issuingDateFrom,
                issuingDateTo: searchParam.issuingDateTo,
                paymentMethod: searchParam.paymentMethod,
                currentStates: searchParam.currentStates,
                deliveryDateFrom: searchParam.deliveryDateFrom,
                deliveryDateTo: searchParam.deliveryDateTo,
                paymentMethods: searchParam.paymentMethods,
                consigneeCity: searchParam.consigneeCity,
                COD: searchParam.COD,
            })
        }
    }

    onChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("state", this.state);
        this.props.searchValue([], this.state)
    }

    reset = () => {
        this.setState(() => this.initialState)
        this.props.searchValue([], null)
    }

    onInputChange = (query, { action }) => {
        if (action !== "set-value") {
            this.setState({ inputValueCity: query });
            this.setState({
                optionsCity: [{ value: 'shiraz', label: 'shiraz' },
                { value: 'abadan', label: 'abadan' },
                { value: 'gazvin', label: 'gazvin' },
                { value: 'zanjan', label: 'zanjan' },
                { value: 'abadi', label: 'abadi' },
                { value: 'abadiyan', label: 'abadiyan' },
                { value: 'abadeh', label: 'abadeh' },
                { value: 'yazd', label: 'yazd' }]
            });
            if (query.length > 1) {
                this.setState({ openMenu: true })
            } else {
                this.setState({ openMenu: false })
            }
        }
    }

    handleChange = (event) => {
        const newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    };

    render() {
        const {
            waybillNumber,
            issuingDateFrom,
            issuingDateTo,
            paymentMethod,
            currentStates,
            deliveryDateFrom,
            deliveryDateTo,
            paymentMethods,
            consigneeCity,
            optionsCity,
            inputValueCity,
            COD,
            openMenu
        } = this.state

        return (

            <Form onSubmit={this.handleSubmit} >
                <Row>
                    <Col md={6} sm={12}>
                        <FormTextArea
                            // class
                            label={"waybillNumber"}
                            placeholder={"شماره بارنامه"}
                            id="waybillNumber"
                            type="textArea"
                            name='waybillNumber'
                            value={waybillNumber}
                            rows="2"
                            onChange={(e) => this.onChange(e)}
                        />
                        <Select
                            placeholder='حداقل دو کاراکتر از شهر مورد نظر را وارد نمایید'
                            label={"consigneeCity"}
                            id="title1"
                            type="text"
                            name='consigneeCity'
                            inputValue={inputValueCity}
                            onInputChange={this.onInputChange}
                            options={optionsCity}
                            value={consigneeCity}
                            openMenuOnClick={false}
                            menuIsOpen={openMenu}
                            // isLoading={true}
                            onChange={selectedOption => {
                                this.setState({ consigneeCity: selectedOption });
                            }} />

                        <Select
                            label={"currentStates"}
                            type="text"
                            name='currentStates'
                            options={[
                                { value: 'DELIVERED', label: 'DELIVERED' },
                                { value: 'ISSUED', label: 'ISSUED' },
                                { value: 'RETURNED', label: 'RETURNED' },
                                { value: 'VOIDED', label: 'VOIDED' }]}
                            value={currentStates}
                            onChange={selectedOption => {
                                this.setState({ currentStates: selectedOption });
                            }} />

                        <Select
                            label={"paymentMethods"}
                            id="title3"
                            type="text"
                            name='paymentMethods'
                            options={[
                                { value: 'CASH', label: 'CASH' },
                                { value: 'CREDIT', label: 'CREDIT' },
                                { value: 'POS', label: 'POS' }]}
                            value={paymentMethods}
                            onChange={selectedOption => {
                                this.setState({ paymentMethods: selectedOption });
                                console.log(paymentMethods);
                            }} />
                    </Col>

                    <Col md={6} sm={12}>
                        <FormDatePicker
                            label={"issuingDateFrom"}
                            placeholder={"تاریخ صدور از"}
                            id="title1"
                            // type="date"
                            name='issuingDateFrom'
                            preSelected={issuingDateFrom}
                            value={issuingDateFrom}
                            onChange={(value) => {
                                this.setState({ issuingDateFrom: value })
                                console.log("value", value);
                                console.log("value", value._d);
                            }}
                        />

                        <FormDatePicker
                            label={"to"}
                            placeholder={"تاریخ صدور تا"}
                            id="title2"
                            name='issuingDateTo'
                            value={issuingDateTo}
                            onChange={(value) => { this.setState({ issuingDateTo: value }) }}
                        />

                        <FormDatePicker
                            label={"deliveryDateFrom"}
                            placeholder={"تاریخ تحویل از"}
                            id="title1"
                            name='deliveryDateFrom'
                            value={deliveryDateFrom}
                            onChange={(value) => { this.setState({ deliveryDateFrom: value }) }}
                        />

                        <FormDatePicker
                            label={"to"}
                            placeholder={"تاریخ تحویل تا"}
                            id="title2"
                            name='deliveryDateTo'
                            value={deliveryDateTo}
                            onChange={(value) => { this.setState({ deliveryDateTo: value }) }}
                        />

                        <Select
                            isMulti={false}
                            label={"hasCOD?"}
                            id="title3"
                            type="text"
                            name='COD'
                            options={[
                                { value: 'null', label: 'هیچ' },
                                { value: 'yes', label: 'بله' },
                                { value: 'No', label: 'خیر' }]}
                            value={COD}
                            onChange={selectedOption => {
                                this.setState({ COD: selectedOption });
                            }} />

                    </Col>
                </Row>
                <hr />
                <CardBody cardBodyClass="crdbodyFooterSearch pnotPaddingBottom" >
                    <div className="form-group m-b-0   text-right">
                        <ButtonGroup>
                            <Button
                                label={"search"}
                                buttonclass="btn btn-info waves-effect waves-light"
                                htmlType="submit">
                            </Button>
                            <Button
                                label={"reset"}
                                buttonclass="btn btn-dark waves-effect waves-light"
                                onClick={this.reset}
                            >
                            </Button>
                        </ButtonGroup>
                    </div>
                </CardBody>

            </Form>

        )
    }
}
