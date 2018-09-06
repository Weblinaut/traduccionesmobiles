import React from "react";

class FirstPage extends Component {
    render() {
        return (<div>
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
                                    <li>MUCH MORE</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>);
    }
}