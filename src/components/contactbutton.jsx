import React, {Component} from 'react'
import {Translate, withLocalize} from "react-localize-redux";
import {Link} from "react-router-dom";




class ContactButton extends Component {
    render() {
        return (
            <div className="text-center">
                <h3 className="mb-3 text-center"><Translate id='services.workTogether'/></h3>
                <br/>
                <Link className="site-btn" to="/contact">Get in touch</Link>
            </div>

        )
    }
}

export default withLocalize(ContactButton)
