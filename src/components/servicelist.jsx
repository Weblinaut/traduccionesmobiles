import React, {Component} from "react";
import { Translate } from "react-localize-redux";

class ServiceList extends Component {
    render() {
        return (
            <div className="container">
                <div className="row align-content-center">
                    <div className="col-xl-10 offset-xl-1">
                        <h3 className="">Examples of services provided:</h3>
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-md-6">
                                <ul>
                                    <li><Translate id='services.interpreting'/></li>
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
        )
    }
}




export default ServiceList


