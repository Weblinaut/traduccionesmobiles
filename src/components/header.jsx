import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Translate } from "react-localize-redux";
import { withLocalize } from "react-localize-redux";




class Header extends Component {
    render() {
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
                            <button className="site-btn header-btn" onClick={()=> {
                                console.log(this.props.activeLanguage)
                                if (this.props.activeLanguage.code === "en") {
                                    localStorage.setItem("defaultLanguage", "es")
                                    this.props.setActiveLanguage("es")
                                    return
                                }
                                localStorage.setItem("defaultLanguage", "en")
                                this.props.setActiveLanguage("en")
                            }}><Translate id="langSwitch" /></button>
                            <nav className="main-menu">
                                <ul>
                                    <li><Link to="/home">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="nav-switch">
                    <i className="fa fa-bars"></i>
                </div>
            </header>
                 )
    }
}

export default withLocalize(Header)

//navigator.language.split("-")[0]
//url lang