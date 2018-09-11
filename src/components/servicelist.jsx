import React, {Component} from "react";
import { Translate } from "react-localize-redux";

class ServiceList extends Component {
    render() {
        return (
            <div className="container m-100">
                <hr/>
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <h3 className="text-center"><Translate id='services.examples'/>:</h3>
                        <br/>
                        <div className="row">
                            <div className="col-md-6">
                                <ul>
                                    <li><Translate id='services.immigration'/></li>
                                    <li><Translate id='services.consulates'/></li>
                                    <li><Translate id='services.travelPermission'/></li>
                                    <li><Translate id='services.documentTranslation'/></li>
                                    <li><Translate id='services.lettersWritten'/></li>

                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    <li><Translate id='services.passportDocuments'/></li>
                                    <li><Translate id='services.workApplications'/></li>
                                    <li><Translate id='services.schoolInterpretation'/></li>
                                    <li><Translate id='services.doctorInterpretation'/></li>
                                    <li><Translate id='services.jobInterviews'/></li>
                                    <li><Translate id='services.muchMore'/></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}




export default ServiceList


