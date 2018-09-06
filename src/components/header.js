import React from 'react';
import {Link} from 'react-router'
import {Navbar, NavItem} from 'react-materialize';

export default React.createClass({
    render(){
        return (
            <header className="header-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-3">
                            <div className="logo">
                                <h2 className="site-logo">Traducciones Mobiles LLC</h2>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-9">
                            <a href="" className="site-btn header-btn">Contact Us</a>
                            <nav className="main-menu">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="nav-switch">
                    <i className="fa fa-bars"></i>
                </div>
            </header>
            {this.props.children}

        )
    }
})


