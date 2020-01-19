import React, { Component } from 'react'
import FormData from '../presentational/input/FormData';
import Card from '../presentational/card/Card'
import Col from '../presentational/Col';
import Row from '../presentational/Row';

export default class CurrentRecordStatus extends Component {
    render() {
        return (
            <>

                <div className="form-group row">
                    <div className="col-md-9">
                        <p className="form-control-static">2از 2بسته
                        <span className="label label-success">تحویل شد</span>
                            در نمایندگی تهران-دفتر مرکزی </p>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-9">
                        <p className="form-control-static"> <b> تهران</b>  (ایران ,استان تهران) </p>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-9">
                        <p className="form-control-static">292545556 ,1544568 </p>
                    </div>
                </div>


                <Row>
                    <div className="col-lg-12 col-md-12">
                        <Card
                            body={
                                <ul className="card text-black bg-light timeline" >
                                    <li className="costom">

                                        <Card
                                            body={
                                                <Row>
                                                    <Col md={8} >
                                                        <div>
                                                            <span className=" display-8 label label-danger"> 1369-02-03</span>

                                                        </div>


                                                    </Col>

                                                </Row>}
                                        >
                                        </Card>
                                    </li>
                                    <li className="costom">

                                        <Card
                                            body={
                                                <div className="row ">
                                                    <div className="col-md-8 ">
                                                        <div className=" fa timeline-icon ">
                                                            <span className="round display-6 round-success">
                                                                <i className="mdi mdi-home"></i>
                                                            </span>
                                                        </div>

                                                        <div className="card text-black ">

                                                            <div className="d-flex no-block align-items-center card-header bg-white">
                                                                <div >
                                                                    <h5>
                                                                        <b> <>9</>
                                                                            <>از</>
                                                                            <>9</>
                                                                            <>بسته دریافت شد</>
                                                                        </b>
                                                                    </h5>
                                                                </div>
                                                                <div className="ml-auto">
                                                                    <span className="text-cyan display-8">
                                                                        <i className="mdi mdi-clock"></i>
                                                                        1398-02-05 18:52
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <p className="card-text">نمایندگی تهران-دفتر مرکزی</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            }
                                        >
                                        </Card>
                                    </li>
                                    <li className=" costom " >
                                        <Card
                                            body={
                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <div>
                                                            <span className=" round text- display-6 ">
                                                                <i className="ti-server"></i>
                                                            </span>
                                                        </div>

                                                        <div className="card text-black timeline-item">

                                                            <div className="d-flex no-block align-items-center card-header bg-white ">
                                                                <div >
                                                                    <h5>
                                                                        <b> <>9</>
                                                                            <>از</>
                                                                            <>9</>
                                                                            <> بسته در انبار</>
                                                                        </b>
                                                                    </h5>
                                                                </div>
                                                                <div className="ml-auto">
                                                                    <span className="text-cyan display-8">
                                                                        <i className="mdi mdi-clock"></i>
                                                                        1398-02-05 18:52
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 ">
                                                                <p className="card-text">نمایندگی تهران-دفتر مرکزی</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            }
                                        >
                                        </Card>
                                    </li>
                                    <li className=" costom " >
                                        <Card
                                            body={
                                                <div className="row  ">
                                                    <div className="col-md-8">
                                                        <div>
                                                            <span className=" round text- display-7 round-danger ">
                                                                <i className="ti-receipt" ></i>
                                                            </span>
                                                        </div>

                                                        <div className="card text-black">

                                                            <div className="d-flex no-block align-items-center card-header bg-white ">
                                                                <div >
                                                                    <h5>
                                                                        <b> <>9</>
                                                                            <>از</>
                                                                            <>9</>
                                                                            <> بسته تخلیه</>
                                                                        </b>
                                                                    </h5>
                                                                </div>
                                                                <div className="ml-auto">
                                                                    <span className="text-cyan display-8">
                                                                        <i className="mdi mdi-clock"></i>
                                                                        <span >1398-02-05 18:52</span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <p className="card-text">نمایندگی تهران-دفتر مرکزی</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            }
                                        >
                                        </Card>
                                    </li>

                                </ul>}
                        >
                        </Card>
                    </div>
                </Row>
            </>
        )
    }
}
