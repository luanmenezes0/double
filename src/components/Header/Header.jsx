import React, { useState } from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Divider,
  Dropdown,
  Tooltip,
  Drawer,
  Menu,
  Button,
} from "antd";
import styles from "./Header.module.css";
import { MessageOutlined, BellOutlined, MenuOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";

const Header = ({ logout, user }) => {
  const [visible, showDrawer] = useState(false);

  const registerLink = [
    { item: "Alertas de SLA", route: "/" },
    { item: "Ambientes", route: "/" },
    { item: "Bens", route: "/" },
    { item: "Centros de Custo", route: "/" },
    { item: "Checklist", route: "/" },
    { item: "Fornecedores", route: "/" },
    { item: "Grupos de Empresas", route: "/" },
    { item: "Janelas de Atendimento", route: "/" },
    { item: "Procedimentos", route: "/" },
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

  const configLinks = [
    { item: "Preferências de Empresa", route: "/" },
    { item: "Preferências de Grupos", route: "/" },
  ];

  const menu = (links) =>
    links.map((option) => (
      <Menu.Item key={option.item}>
        <Link to={option.route}>{option.item}</Link>
      </Menu.Item>
    ));

  const userMenu = () => (
    <Menu>
      <Menu.Item>
        <Link to="/">Perfil</Link>
      </Menu.Item>
      <Menu.Item>
        {/* <span onClick={() => logout()}>Sair</span> */}
        <Button type="text" onClick={logout}>
          Sair
        </Button>
      </Menu.Item>
    </Menu>
  );

  const userInfo = (
    <div className={styles.Avatar}>
      <Avatar size="large" src="https://picsum.photos/100/100" />
      <span>{user}</span>
    </div>
  );

  return (
    <header>
      <Row align="middle" justify="space-between">
        <Col span={5}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Col>
        <Col md={12} sm={0} xs={0}>
          <nav>
            <ul className={styles.Menu}>
              <li>
                <Link to="/">Tickets</Link>
              </li>
              <li>
                <Dropdown
                  overlay={<Menu>{menu(registerLink)}</Menu>}
                  placement="bottomCenter"
                >
                  <Link to="/">Cadastro</Link>
                </Dropdown>
              </li>
              <li>
                <Link to="/">Auditorias</Link>
              </li>
              <li>
                <Link to="/">Relatórios</Link>
              </li>
              <li>
                <Dropdown
                  overlay={<Menu>{menu(securityLinks)}</Menu>}
                  placement="bottomCenter"
                >
                  <Link to="/">Segurança</Link>
                </Dropdown>
              </li>
              <li>
                <Dropdown
                  overlay={<Menu>{menu(monitoringLinks)}</Menu>}
                  placement="bottomCenter"
                >
                  <Link to="/">Monitoramento</Link>
                </Dropdown>
              </li>
              <li>
                <Dropdown
                  overlay={<Menu>{menu(configLinks)}</Menu>}
                  placement="bottomCenter"
                >
                  <Link to="/">Configurações</Link>
                </Dropdown>
              </li>
            </ul>
          </nav>
        </Col>
        <Col md={3} sm={0} xs={0}>
          <div className={styles.Icons}>
            <Tooltip placement="bottom" title="Chat">
              <MessageOutlined className={styles.Icon} />
            </Tooltip>
            <Tooltip placement="bottom" title="Notificações">
              <BellOutlined className={styles.Icon} />
            </Tooltip>
          </div>
        </Col>
        <Col md={4} sm={0} xs={0}>
          <Dropdown overlay={userMenu} placement="bottomCenter">
            {userInfo}
          </Dropdown>
        </Col>
        <Col md={0} sm={1}>
          <MenuOutlined onClick={() => showDrawer(true)} height="10px" />
        </Col>
      </Row>
      <Divider />
      <Drawer
        title={
          <div>
            {userInfo}
            <div className={styles.UserInfo}>
              <Link to="Perfil">Perfil</Link>
              <Divider type="vertical" />
              <span onClick={logout}>Sair</span>
            </div>
          </div>
        }
        bodyStyle={{ padding: 0 }}
        placement="right"
        closable={false}
        onClose={() => showDrawer(false)}
        visible={visible}
      >
        <Menu defaultSelectedKeys={[""]} mode="inline">
          <Menu.Item key="1">Tickets</Menu.Item>
          <Menu.Item key="2">Chat</Menu.Item>
          <Menu.SubMenu key="sub3" title={<span>Cadastros</span>}>
            {menu(registerLink)}
          </Menu.SubMenu>
          <Menu.Item key="4">Relatórios</Menu.Item>
          <Menu.SubMenu key="sub5" title={<span>Segurança</span>}>
            {menu(securityLinks)}
          </Menu.SubMenu>
          <Menu.SubMenu key="sub6" title={<span>Monitoramento</span>}>
            {menu(monitoringLinks)}
          </Menu.SubMenu>
          <Menu.SubMenu key="sub7" title={<span>Configurações</span>}>
            {menu(configLinks)}
          </Menu.SubMenu>
        </Menu>
      </Drawer>
    </header>
  );
};

export default Header;
