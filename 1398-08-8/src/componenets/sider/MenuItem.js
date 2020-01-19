import * as React from 'react';
import { FormattedMessage } from 'react-intl';
// import PropTypes from "prop-types";

const MenuItem = ({
    title = "title",
    href = "#1",
    icon = "mdi mdi-adjust",
    classMenu = '',
    ...props }) => {

    return (

        <li className={"sidebar-item "}>
            <span className={"sidebar-link waves-dark "+classMenu}>
                <i className={icon}></i>
                <span className="hide-menu">
                    <FormattedMessage
                        id={title}
                        defaultMessage={title}
                    />
                    {/* {title} */}
                </span>
            </span>
        </li>
    );
}



MenuItem.defaultProps = {
    title: "title",
    icon: "mdi mdi-adjust"
};
export default MenuItem
