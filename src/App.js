import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/style.css';
import './css/magnific-popup.css';



class App extends Component {
  render() {
    return (
      <div className="App">
          <body>

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

          <section className="intro-section">
              <div className="container text-center">
                  <div className="row">
                      <div className="col-xl-10 offset-xl-1">
                          <h2 className="section-title">I offer <span>Spanish Translation Services</span>, with 10+ years of experience</h2>
                      </div>
                  </div>
              </div>
          </section>

          <div className="container">
              <div className="row align-content-center">
                  <div className="col-xl-10 offset-xl-1">
                      <h3 className="">Examples of services provided:</h3>
                      <br/>
                          <br/>
                              <div className="row">
                                  <div className="col-md-6">
                                      <ul>
                                          <li>Interpreting with immigration appointments</li>
                                          <li>Interpreting at consulates</li>
                                          <li>Permission to travel with notarization</li>
                                          <li>Translation of documents</li>
                                          <li>Letters in English/Spanish</li>
                                          <li>Divorce documents petitioner</li>
                                          <li>Divorce documents respondent </li>
                                          <li>Child custody documents</li>
                                      </ul>
                                  </div>
                                  <div className="col-md-6">
                                      <ul>
                                          <li>Documents for requesting U S passport</li>
                                          <li>Work Applications</li>
                                          <li>Interpreting at school</li>
                                          <li>Interpreting with Clinics/Doctors</li>
                                          <li>Interpreting at job interviews</li>
                                          <li>Client transportation</li>
                                          <li>We can help you buy or sale a house</li>
                                          <li>MUCH MORE</li>
                                      </ul>
                                  </div>
                              </div>
                  </div>
              </div>

          </div>




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





          <script src="js/jquery-2.1.4.min.js"></script>
          <script src="js/bootstrap.min.js"></script>
          <script src="js/mixitup.min.js"></script>
          <script src="js/magnific-popup.min.js"></script>
          <script src="js/main.js"></script>
          </body>
      </div>
    );
  }
}

export default App;
