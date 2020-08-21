import React, { Component } from "react";
import styles from "./TicketsList.module.css";
import { connect } from "react-redux";
import { Table, Divider, Button, Popconfirm, message } from "antd";
import {
  ForkOutlined,
  ShopOutlined,
  TagOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import PriorityBadge from "../UI/PriorityBadge";
import { deleteTicket, fetchTickets } from "../../redux/Tickets/actions";

export class TicketsList extends Component {
  render() {
    const typeIcon = (type) => {
      switch (type) {
        case (type = "1"):
          return <TagOutlined style={{ color: "#4c12a1" }} />;
        case (type = "2"):
          return <ShopOutlined style={{ color: "#4c12a1" }} />;
        case (type = "3"):
          return <ForkOutlined style={{ color: "#4c12a1" }} />;
        default:
          break;
      }
    };

    const columns = [
      {
        title: <span className={styles.TableHeader}>Id</span>,
        dataIndex: "id",
        render: (a) => (
          <span className={styles.TicketInfo}>{a.slice(4, 9)}</span>
        ),
      },
      {
        title: <span className={styles.TableHeader}>Tipo</span>,
        dataIndex: "ticketType",
        render: (type) => typeIcon(type),
      },
      {
        title: <span className={styles.TableHeader}>Bem</span>,
        dataIndex: "asset",

        render: (d) => <span className={styles.TicketInfo}>{d}</span>,
      },
      {
        title: <span className={styles.TableHeader}>Tipo Predial</span>,
        dataIndex: "buildingType",

        render: (d) => <span className={styles.TicketInfo}>{d}</span>,
      },
      {
        title: <span className={styles.TableHeader}>Procedimento</span>,

        dataIndex: "procedure",
        render: (d) => <span className={styles.TicketInfo}>{d}</span>,
      },
      {
        title: <span className={styles.TableHeader}>Descrição</span>,
        dataIndex: "description",
        render: (d) => <span className={styles.TicketInfo}>{d}</span>,
      },
      {
        title: <span className={styles.TableHeader}>Prioridade</span>,
        dataIndex: "priority",
        render: (type) => <PriorityBadge type={type} />,
      },
      {
        title: <span className={styles.TableHeader}>Responsável</span>,
        dataIndex: "assignee",
        render: (a) => <span className={styles.TicketInfo}>{a}</span> || "-",
      },
      {
        title: <span className={styles.TableHeader}>Prazo</span>,
        dataIndex: "deadline",
        render: (a) => <span className={styles.TicketInfo}>{a}</span>,
      },
      {
        render: (ticket) => (
          <>
            <Popconfirm
              title={`Tem certeza que quer excluir o ticket ${ticket.id.slice(4, 9)}?`}
              onConfirm={() => {
                this.props.onDeleteTicket(ticket.id);
                message.success("Ticket excluído com sucesso");
              }}
              okText="Yes"
              cancelText="No"
            >
              <Button shape="circle" icon={<DeleteOutlined />} />
            </Popconfirm>
          </>
        ),
      },
    ];

    return (
      <div>
        <Divider />
        <Table
          rowSelection={{
            type: 'checkbox',
          }}
          loading={this.props.loading}
          columns={columns}
          dataSource={this.props.tickets}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tickets: state.tickets.tickets,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteTicket: (id) => dispatch(deleteTicket(id)),
  onFetchTickets: () => dispatch(fetchTickets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);
