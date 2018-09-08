import React, { Component } from 'react';
import { Translate } from "react-localize-redux";



export default class Contact extends Component {
    render() {
        return (<div>
                <section className="intro-section">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-xl-10 offset-xl-1">

                            </div>
                        </div>
                    </div>
                </section>


            <section className="page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 contect-tect">
                            <h2><Translate id='services.startNow'/></h2>
                            <p><Translate id='services.contactUs'/></p>
                        </div>
                    </div>
                   <div className="box">
                       <form action="https://getsimpleform.com/messages?form_api_token=7193546e3e6b226a253b490fea54f5a8" method="post" encType="text/plain" className="contact-form">
                           <div className="row">
                               <div className="col-md-6">
                                   <input type="text" name="name" placeholder="Name" />
                               </div>
                               <div className="col-md-6">
                                   <input type="text" name="email" placeholder="E-mail" />
                               </div>
                               <div className="col-md-6">
                                   <input type="text" name="subject" placeholder="Subject" />
                               </div>
                               <div className="col-md-6">
                                   <input type="text" name="comment" placeholder="How did you hear about us?" />
                               </div>
                               <div className="col-md-12">
                                   <textarea placeholder="Message"></textarea>
                               </div>
                           </div>
                           <div className="text-center">
                               <button className="site-btn">Send</button>
                           </div>
                       </form>
                   </div>


                </div>
            </section>
            </div>


        );
    }
}