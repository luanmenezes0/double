import React, { Component } from "react";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../../redux/Auth/actions";
import styles from "./Tickets.module.css";
import { Button, Radio, Empty } from "antd";
import Modal from "antd/lib/modal/Modal";

class Tickets extends Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const ticketsPage = (
      <>
        <Header
          logout={this.props.onLogoutUser}
          user={this.props.location.name}
        />
        <main className={styles.Tickets}>
          <Button type="primary" onClick={this.showModal} shape="round">
            + Novo Ticket
          </Button>
          <Modal
            className={styles.Modal}
            style={{ top: 20, "border-radius": "18px" }}
            title="Novo Ticket"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button shape="round" key="back" onClick={this.handleCancel}>
                Cancelar
              </Button>,
              <Button
                shape="round"
                key="submit"
                type="primary"
                onClick={this.handleOk}
              >
                Criar Ticket
              </Button>,
            ]}
          >
            <Radio.Group size="normal">
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </main>
      </>
    );
    //return ticketsPage
    return this.props.isAuth ? ticketsPage : <Redirect to="/auth" />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
  onLogoutUser: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
