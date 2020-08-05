import React, { Component } from "react";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from '../../redux/Auth/actions';

class Tickets extends Component {

  render() {
    const ticketsPage = (
      <>
        <Header logout={this.props.onLogoutUser} />
        <div style={{ margin: 'auto', textAlign: 'center' }}>
          <h1>Hello {this.props.location.name}!</h1>
        </div>

      </>
    );
    return this.props.isAuth ? ticketsPage : <Redirect to="/auth" />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});


const mapDispatchToProps = (dispatch) => ({
  onLogoutUser: () => dispatch(logout())
})


export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
