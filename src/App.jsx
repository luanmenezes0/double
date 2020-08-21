import React, { Component } from "react";
import "./App.less";
import Footer from "./components/Footer/Footer";
import Auth from "./containers/Auth/Auth";
import { Switch, Route } from "react-router-dom";
import Tickets from "./containers/Tickets/Tickets";
import { connect } from "react-redux";
import { auth } from "./redux/Auth/actions";
import { Layout } from "antd";

class App extends Component {
  render() {
    return (
      <Layout style={{ height: "100%" }}>
        <Layout.Content>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/" component={Tickets} />
          </Switch>
        </Layout.Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
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
