import React, { Component } from 'react';
import ServiceList from './servicelist'



export default class FirstPage extends Component {
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

            <ServiceList />

            </div>


        );
    }
}