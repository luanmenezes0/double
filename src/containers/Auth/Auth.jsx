import React, { Component } from "react";
import styles from "./Auth.module.css";
import { auth, changePasswordInputAuth, changeEmailInputAuth } from "../../redux/Auth/actions";
import { Button, Input, Form } from "antd";
import { connect } from "react-redux";
import Logo from "./logo.png";

class Auth extends Component {
  authUser = () => {
    this.props.onAuthUser(this.props.email, this.props.password);
    this.props.history.push({
      pathname: "/",
      name: this.props.email,
    });
  };

  render() {
    return (
      <div className={styles.Auth}>
        <div className={styles.Logo}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={styles.Box}>
          <div className={styles.BoxHeader}>
            <div className={styles.BoxTitle}>Seja bem-vindo ao Trílogo</div>
            <div className={styles.BoxText}>Faça login para continuar</div>
          </div>

          <Form onFinish={this.authUser}>
            <Form.Item>
              <span className="required">E-mail</span>
              <Input
                className={styles.InputBox}
                onChange={(e) => this.props.onEmailChange(e.target.value)}
              />
            </Form.Item>

            <Form.Item>
              <span className="required">Senha</span>
              <Input
                className={styles.InputBox}
                type="password"
                onChange={(e) => this.props.onPasswordChange(e.target.value)}
              />
            </Form.Item>

            <Form.Item>
              <Button
                size="large"
                block
                shape="round"
                type="primary"
                htmlType="submit"
                className={styles.AuthButton}
              >
                Entrar
              </Button>
            </Form.Item>
          </Form>
          <span className={styles.BoxLink}>
            <a href="/">Crie uma conta</a>{" "}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  email: state.auth.email,
  password: state.auth.password
});

const mapDispatchToProps = (dispatch) => ({
  onAuthUser: (email, password) => dispatch(auth(email, password)),
  onPasswordChange: (password) => dispatch(changePasswordInputAuth(password)),
  onEmailChange: (email) => dispatch(changeEmailInputAuth(email))
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
