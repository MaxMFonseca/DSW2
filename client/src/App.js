import './App.css';
import './css/global.css';

import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import {MHeader, MFooter} from './Components/Layout'

import Admin_register from "./Pages/Admin_register.jsx"
import Base from "./Pages/Base.jsx"
import Promo_list from "./Pages/Promo_list.jsx"
import Promo_register from "./Pages/Promo_register.jsx"

class App extends Component {
  constructor(props){
    super(props)

    this.state = {utype : "site"}

    this.setUserType = this.setUserType.bind(this);
  }

  setUserType(){
    switch(this.state.utype){
      case "hotel":
        this.setState({utype : "site"})
        return
      case "site":
        this.setState({utype : "admin"})
        return
      case "admin":
        this.setState({utype : "buyer"})
        return
      case "buyer":
        this.setState({utype : "hotel"})
        return
      default:
        this.setState({utype : "hotel"})
        return
    }   
  }

  render() {
    return (
      <div classname="App">
        <MHeader />
        
        <Router>
          <Switch>
            <Route path="/" exact render={(props) => <Base {...props} usertype={this.state.utype} />} />
            <Route path="/admin_register" exact render={(props) => <Admin_register {...props} usertype={this.state.utype} />} />
            <Route path="/list" exact render={(props) => <Promo_list {...props} usertype={this.state.utype} />} />
            <Route path="/promo_register" exact render={(props) => <Promo_register {...props} usertype={this.state.utype} />} />
          </Switch>
        </Router>

        <MFooter />

        <button onClick={() => { this.setUserType(); }}>SetUType</button>
      </div>
    );
  }
}

export default App;
