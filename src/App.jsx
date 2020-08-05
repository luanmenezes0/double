import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Auth from "./containers/Auth/Auth";
import { Switch, Route } from "react-router-dom";
import Tickets from "./containers/Tickets/Tickets";
import { connect } from "react-redux";
import { auth } from "./redux/Auth/actions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Content">
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/" component={Tickets} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
  onAuthUser: () => dispatch(auth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
