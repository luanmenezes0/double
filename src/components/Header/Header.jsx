import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { Button, Row, Col, Divider, Menu, Dropdown, Tooltip } from "antd";
import styles from "./Header.module.css";
import { MessageOutlined, BellOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";

const Header = ({ logout, user }) => {
  const registerLink = [
    { item: "Alertas de SLA", route: "/" },
    { item: "Ambientes", route: "/" },
    { item: "Bens", route: "/" },
    { item: "Centros de Custo", route: "/" },
    { item: "Checklist", route: "/" },
    { item: "Alertas de SLA", route: "/" },
    { item: "Fornecedores", route: "/" },
    { item: "Regras de Tickets Automáticos", route: "/" },
    { item: "Serviços", route: "/" },
    { item: "Tipos de Bem", route: "/" },
    { item: "Tipos Prediais", route: "/" },
  ];

  const securityLinks = [
    { item: "Grupos de Usuários", route: "/" },
    { item: "Perfis de Acesso", route: "/" },
    { item: "Usuários", route: "/" },
  ];

  const monitoringLinks = [
    { item: "Painel de Operações", route: "/" },
    { item: "Trílogo Now", route: "/" },
    { item: "Trílogo TV", route: "/" },
  ];

  const ConfigLinks = [
    { item: "Preferências de Empresa", route: "/" },
    { item: "Preferências de Grupos", route: "/" },
  ];

  const menu = (links) => (
    <Menu>
      {links.map((option) => (
        <Menu.Item>
          <Link to={option.route}>{option.item}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  const userMenu = () => (
    <Menu>
      <Menu.Item>
        <Link to="">Perfil</Link>
      </Menu.Item>
      <Menu.Item>
        <span onClick={logout}>Sair</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <header>
      <Row align="middle" justify="center">
        <Col span={5}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Col>
        <Col span={12}>
          <nav>
            <ul className={styles.Menu}>
              <li>
                <Link>Tickets</Link>
              </li>
              <li>
                <Dropdown overlay={menu(registerLink)} placement="bottomCenter">
                  <Link>Cadastro</Link>
                </Dropdown>
              </li>
              <li>
                <Link>Auditorias</Link>
              </li>
              <li>
                <Link>Relatórios</Link>
              </li>
              <li>
                <Dropdown
                  overlay={menu(securityLinks)}
                  placement="bottomCenter"
                >
                  <Link>Segurança</Link>
                </Dropdown>
              </li>
              <li>
                <Dropdown
                  overlay={menu(monitoringLinks)}
                  placement="bottomCenter"
                >
                  <Link>Monitoramento</Link>
                </Dropdown>
              </li>
              <li>
                <Dropdown overlay={menu(ConfigLinks)} placement="bottomCenter">
                  <Link>Configurações</Link>
                </Dropdown>
              </li>
            </ul>
          </nav>
        </Col>
        <Col span={3}>
          <div className={styles.Icons}>
            <Tooltip placement="bottom" title="Chat">
              <MessageOutlined className={styles.Icon} />
            </Tooltip>
            <Tooltip placement="bottom" title="Notificações">
              <BellOutlined className={styles.Icon} />
            </Tooltip>
          </div>
        </Col>
        <Col span={4}>
          <Dropdown overlay={userMenu} placement="bottomCenter">
            <div className={styles.Avatar}>
              <Avatar size="large" src="https://picsum.photos/100/100" />
              <span>{user}</span>
            </div>
          </Dropdown>
        </Col>
      </Row>
      <Divider />
    </header>
  );
};

export default Header;
