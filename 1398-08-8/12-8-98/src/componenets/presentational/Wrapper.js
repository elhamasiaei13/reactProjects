import React, { Component } from 'react'
import ContainerFluid from '../content/ContainerFluid';
import Header from '../Layout/Header';
import Sider from '../Layout/Sider';
import Content from '../../componenets/content/Content';
import Media from 'react-media';

// import Breadcrumb from './breadcrumb/Breadcrumb';
export default class Wrapper extends Component {

    render() {
        const { children ,sidebartype} = this.props
        return (
          
                            <div id="main-wrapper"
                            data-theme="dark"
                            data-layout="vertical"
                            data-navbarbg="skin6"
                            data-sidebartype={sidebartype}
                            // data-sidebartype="mini-sidebar"
                            data-sidebar-position="fixed"
                            data-header-position="fixed"
                            data-boxed-layout="full"
                            className={sidebartype=="mini-sidebar"?'mini-sidebar':''}
                        >
                            {children}
                        </div>
                         
          
        )
    }
}

