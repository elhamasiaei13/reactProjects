import React from 'react';
import Button from '../presentational/button/Button';
import ButtonGroup from '../presentational/button/ButtonGroup';
import Row from '../presentational/Row'
const ShipmentActionBar = ({ ...props }) => {
    return (

        <Row>
            <ButtonGroup>
                <Button
                    label="Print Tags"
                    type="info"
                    buttonclass="waves-light btn-info" />
                <Button
                    label="printWaybill"
                    type="info"
                    buttonclass="waves-light btn-primary" />

            </ButtonGroup>

        </Row>);

}
export default (ShipmentActionBar);
