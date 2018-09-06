import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import 'font-awesome/css/font-awesome.css'
import 'magnific-popup/dist/magnific-popup.css';
import Main from './components/main'
import { LocalizeProvider } from "react-localize-redux";

class App extends Component {
  render() {
    return (
        <LocalizeProvider>
           <Main />
        </LocalizeProvider>
    );
  }
}

export default App;
