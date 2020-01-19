
import React, { Component } from 'react'
import Breadcrumb from '../breadcrumb/Breadcrumb';
import CardBody from './CardBody'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            convertTitle: ''
        }
    }


    render() {

        const { body, cardTitle, cardSubtitle, cardClass, cardBodyClass,noHr } = this.props
        const { intl } = this.props
        const title = intl.formatMessage({ id: [cardTitle] });
        // const convertTitle = intl.formatMessage({ id: [cardTitle] ,value:{ what: 'react-intl' }})
        // const convertTitle = (<FormattedMessage {...messages.placeholderIntlText}>
        //     {(msg) => (cardTitle)}
        //   </FormattedMessage>)
        return (
            <div className={"card " + cardClass}>

                <CardBody
                    cardBodyClass={cardBodyClass}
                    cardTitle={title}
                    cardSubtitle={cardSubtitle}
                    noHr={noHr}
                >
                    {this.props.children}
                </CardBody>
            </div>
        )
    }
}
Card.defaultProps = {
    cardClass: "card border-top border-dark",
    cardTitle: "false",
    cardBodyClass: '',
    cardSubtitle: false
}
export default injectIntl(Card) 
