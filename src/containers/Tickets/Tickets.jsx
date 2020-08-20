import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Tickets.module.css";
import { Button, Empty, Spin } from "antd";
import Header from "../../components/Header/Header";
import TicketCreation from "../../components/TicketCreation/TicketCreation";
import { Redirect } from "react-router-dom";
import { showModal } from "../../redux/Tickets/actions";
import { logout } from "../../redux/Auth/actions";
import { PlusOutlined } from "@ant-design/icons";

class Tickets extends Component {
  render() {
    const ticketsPage = (
      <>
        <Header
          logout={this.props.onLogoutUser}
          user={this.props.location.name}
        />
        <main className={styles.Tickets}>
          <Button type="primary" onClick={this.props.onShowModal} shape="round">
            <PlusOutlined /> Novo Ticket
          </Button>
          <Spin spinning={this.props.loading}>
            <TicketCreation />
          </Spin>

          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </main>
      </>
    );
    return ticketsPage;
    //return this.props.isAuth ? ticketsPage : <Redirect to="/auth" />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  modalVisible: state.tickets.showModal,
  loading: state.tickets.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onLogoutUser: () => dispatch(logout()),
  onShowModal: () => dispatch(showModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
