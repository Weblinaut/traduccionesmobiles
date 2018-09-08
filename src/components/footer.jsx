import React, { Component } from 'react';
import {Translate} from "react-localize-redux";
import {Link} from "react-router-dom";


class Footer extends Component {
    render() {
        return (
            <footer className="footer-section text-center">
                <div className="container">



                    <div className="footer-contact">
                        <span><Translate id='services.hoursOfOperation'/>: Monday - Sunday 6am - 10pm</span><br/>

                        <span><i className="fa fa-phone"></i> (801)835-6805</span>
                    </div>
                    <div>
                        <div className="social-links">
                            <a href=""><span className="fa fa-pinterest"></span></a>
                            <a href=""><span className="fa fa-linkedin"></span></a>
                            <a href=""><span className="fa fa-instagram"></span></a>
                            <a href=""><span className="fa fa-facebook"></span></a>
                            <a href=""><span className="fa fa-twitter"></span></a>
                        </div>
                    </div>


                    <div className="copyright">
                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer