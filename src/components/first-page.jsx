import React, { Component } from 'react';
import ServiceList from './servicelist';
import ContactButton from './contactbutton';
import {Translate} from "react-localize-redux";



export default class FirstPage extends Component {
    render() {
        return (<div className="box">
            <section className="intro-section">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <h2 className="section-title"><Translate id='services.title1'/><span><Translate id='services.title2'/></span>, <Translate id='services.title3'/></h2>
                        </div>
                    </div>
                </div>
            </section>
                <ServiceList />

                <ContactButton />

            </div>


        );
    }
}