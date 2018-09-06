import {Router, Route, browserHistory} from 'react-router'

class Layout extends Component {
    Header;
    render(){
        return (
            <div>
  <span>
    <Router history={browserHistory}>
      <Route path="/" component={this.Header}>
       <Route path="/Home" component={Home}/>
       <Route path="/Sign-In" component={SignIn}/>
       <Route path="/Register" component={Register}/>
      </Route>
    </Router>
  </span>
                <span>
    <Router history={browserHistory}>
      <Route path="/" component={RT_Footer}>
       <Route path="/About Us" component={About}/>
       <Route path="/Terms & Conditions" component={TC}/>
       <Route path="/Register" component={Register}/>
      </Route>
    </Router>
  </span>
            </div>
        );
    }
}
export default Layout;