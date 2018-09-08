import React, { Component } from 'react';
import beccaResize from './img/beccaresize.jpg';
import { Translate } from "react-localize-redux";


export default class About extends Component {
    render() {
        return (<div className="box">
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
                            <div className="col-lg-6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet pharetra nisl.
                                    Vestibulum sollicitudin leo non purus vestibulum placerat. Curabitur ac erat
                                    sollicitudin, blandit quam vitae, rutrum diam. Aenean non gravida velit, eu consectetur
                                    neque. Nullam in volutpat massa. Duis scelerisque urna non lectus fringilla suscipit.
                                    Phasellus lacinia facilisis massa, pellentesque consectetur nunc. Nullam elit metus,
                                    condimentum nec libero quis, dapibus malesuada enim. Morbi semper condimentum
                                    pellentesque. </p>


                            </div>
                            <div className="col-lg-4 offset-lg-1">
                                <figure className="pic-frame">
                                    <img src={beccaResize} alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        );
    }
}