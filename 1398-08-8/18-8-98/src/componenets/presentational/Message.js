import React, { Component } from 'react'
import Col from './Col';
import Row from './Row';
import Card from './card/Card';

export default class Message extends Component {
    render() {
        return (
            <Row>
                <Col md={12} xs={12}  >
                    <Card cardBodyclassName=" bg-cyan text-white text-center ">
                        <span className="txtError">
                        {this.props.message}
                        </span>
               </Card>
                </Col>

            </Row>
        )
    }
}
