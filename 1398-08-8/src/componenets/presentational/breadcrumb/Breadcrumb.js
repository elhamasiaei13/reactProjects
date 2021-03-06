import React from 'react'
import ContainerFluid from '../../content/ContainerFluid';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import Row from '../Row'
// import PropTypes from 'prop-types';

const Breadcrumb = ({ title = "title", nav = "", ...props }) => {
    // const { intl } = this.props
    const convertTitle = props.intl.formatMessage({ id: title });

    return (


        <div className="page-breadcrumb">
            <Row>
                <div className="col-md-7 col-sm-8 align-self-center">
                    <h4 className="page-title">
                        {convertTitle}
                    </h4>
                </div>
                <div className="col-md-5 col-sm-4 align-self-center">
                    <div className="d-flex align-items-center justify-content-end">
                        <nav aria-label="breadcrumb">
                            {nav}
                        </nav>
                    </div>
                </div>
            </Row>
        </div>



    )

}
export default injectIntl(Breadcrumb) 
