import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <footer className="footer-section text-center">
                <div className="container">
                    <h2 className="section-title mb-5">Let’s work together</h2>
                    <a href="" className="site-btn">Get in touch</a>
                    <div className="social-links">
                        <a href=""><span className="fa fa-pinterest"></span></a>
                        <a href=""><span className="fa fa-linkedin"></span></a>
                        <a href=""><span className="fa fa-instagram"></span></a>
                        <a href=""><span className="fa fa-facebook"></span></a>
                        <a href=""><span className="fa fa-twitter"></span></a>
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