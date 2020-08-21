import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Tickets.module.css";
import { Button, Divider } from "antd";
import Header from "../../components/Header/Header";
import TicketCreation from "../../components/TicketCreation/TicketCreation";
import { Redirect } from "react-router-dom";
import { showModal, fetchTickets } from "../../redux/Tickets/actions";
import { logout } from "../../redux/Auth/actions";
import { PlusOutlined } from "@ant-design/icons";
import TicketsList from "../../components/TicketsList/TicketsList";
import AppBreadcrumb from "../../components/AppBreadcrumb/AppBreadcrumb";

class Tickets extends Component {
  componentDidMount() {
    this.props.onFetchTickets();
  }

  componentDidUpdate(prevProps) {
    if (this.props.tickets === prevProps.tickets) {
      this.props.onFetchTickets();
    }
  }

  render() {
    const {
      onLogoutUser,
      location,
      onShowModal,
      tickets,
      gridLoading,
    } = this.props;

    const ticketsPage = (
      <>
        <Header logout={onLogoutUser} user={location.name} />
        <Divider style={{ margin: '0' }} />
        <AppBreadcrumb location={location}/>
        <main className={styles.Tickets}>
          <Button type="primary" onClick={onShowModal} shape="round">
            <PlusOutlined /> Novo Ticket
          </Button>
          <TicketCreation />
          <TicketsList tickets={tickets} loading={gridLoading} />
        </main>
      </>
    );
    //return ticketsPage;
    return this.props.isAuth ? ticketsPage : <Redirect to="/auth" />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  modalVisible: state.tickets.showModal,
  loading: state.tickets.loading,
  gridLoading: state.tickets.loading,
  tickets: state.tickets.tickets,
});

const mapDispatchToProps = (dispatch) => ({
  onLogoutUser: () => dispatch(logout()),
  onShowModal: () => dispatch(showModal()),
  onFetchTickets: () => dispatch(fetchTickets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
