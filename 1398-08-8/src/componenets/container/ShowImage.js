import React, { Component } from 'react'
import Col from '../presentational/Col';
import Row from '../presentational/Row';
import test from '../../img/horse.jpg'
import test1 from '../../img/test.jpeg'
import SlideShow from 'react-image-show';
import Table from '../presentational/table/Table';

export default class ShowImage extends Component {
    state = {
        show: false,
        imgSrc: { test },
        width: '',
        height: ''
    }
    allPicture() {
        const array = []
        const data = this.props.data
        data.map((item, index) => {

            array.push(
                <div className="col-lg-6 col-md-6" key={index}>
                    <div className="card">
                        <div className="el-card-item">
                            <div className="el-card-avatar el-overlay-1">
                                <img src={"data:" + item.mimeType + ";base64, " + item.base64encoded} />
                                <div className="el-overlay">
                                    <ul className="list-style-none el-info">
                                        <li className="el-item">
                                            <span
                                                onClick={() => this.setState({
                                                    width: item.imageWidth,
                                                    height: item.imageHeight,
                                                    show: true, imgSrc:
                                                        "data:" + item.mimeType + ";base64, " + item.base64encoded
                                                })}
                                                className="btn default btn-outline image-popup-vertical-fit el-link"
                                            >
                                                <i className="icon-magnifier"></i></span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="el-card-content">
                                <h4 className="m-b-0">{item.type}</h4> <span className="text-muted">item.description</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return array
    }

    render() {
        const { show, imgSrc, width, height } = this.state
        return (
            <div className="row el-element-overlay">
                {this.allPicture()}
                {show ? <>
                    <div className="my-mfp-img  my-mfp-bg"></div>
                    <button onClick={() => this.setState({ show: false })}
                        style={{ "transform": "translate(" + (width / 2 + 13) + "px ,-" + (height / 2 + 12) + "px)" }} className="mfp-close my-mfp-close">
                        <i class="fa fa-times" aria-hidden="true"></i></button>
                    <img className="mfp-img mfp-wrap mfp-bg" src={imgSrc} />
                </>
                    : ''
                }

            </div>)
    }
}
