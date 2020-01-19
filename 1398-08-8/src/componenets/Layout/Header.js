import React from 'react';
import DropDown from '../nav/DropDown';
import SearchNav from '../nav/SearchNav'
const Header = ({ toggleSider, sidebartype = "full" }) => {
    return (
        <header className="topbar"
            data-navbarbg="skin6"
        >
            <nav className="navbar top-navbar navbar-expand-md navbar-light">

                <div className="navbar-header"  data-logobg="skin5">

                    <div className="navbar-brand">

                        {sidebartype === 'full'
                            ?
                            <><a href="index.html" className="logo">
                                <b className="logo-icon iconMenu "> e-courier
                       </b>
                            </a><span
                            
                                onClick={() => { toggleSider("mini-sidebar") }}
                                className="sidebartoggler d-none d-md-block"
                                data-sidebartype="full">
                                    <i className="mdi mdi-toggle-switch mdi-toggle-switch-off font-20"></i>
                                </span>
                            </> : <span
                                onClick={() =>{ toggleSider("full") }}
                                className="sidebartoggler d-none d-md-block"
                                data-sidebartype="mini-sidebar">
                                <i className="mdi mdi-toggle-switch mdi-toggle-switch-on font-20"></i>
                            </span>}

                    </div>

                </div>
                <div 
                 className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin6">

                    <SearchNav  />
                    <DropDown />

                </div>
            </nav>
        </header>

    )
}
export default (Header);