import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom'
import { withLocalize } from "react-localize-redux";
import globalTranslations from "../translations.json";
import { renderToStaticMarkup } from "react-dom/server";
import Header from './header'
import Footer from "./footer"
import FirstPage from './first-page'
import About from './about'
import Contact from './contact'



class Main extends React.Component {
    constructor(props) {
        super(props);

        this.props.initialize({
            languages: [
                { name: "English", code: "en" },
                { name: "Spanish", code: "es" }
            ],
            translation: globalTranslations,
            options: { renderToStaticMarkup, defaultLanguage: localStorage.getItem("defaultLanguage") || "es" }

        });
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">

                    <Header />
                    <Route path="/home" component={FirstPage} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route exact path="/" component={FirstPage} />

                    <Footer />






                    <script src="js/jquery-2.1.4.min.js"></script>
                    <script src="js/bootstrap.min.js"></script>
                    <script src="js/mixitup.min.js"></script>
                    <script src="js/magnific-popup.min.js"></script>
                    <script src="js/main.js"></script>

                </div>
            </BrowserRouter>
        )

    }
}

export default withLocalize(Main);