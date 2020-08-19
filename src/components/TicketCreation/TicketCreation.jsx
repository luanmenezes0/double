import React from "react";
import styles from "./TicketCreation.module.css";
import { connect } from "react-redux";
import {
  CaretUpOutlined,
  CaretRightOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import {
  getCompanies,
  closeModal,
  showModal,
  getProcedures,
  changeForm,
  getAssets,
  getBuildingTypes,
  getUsers,
  resetForm,
  createTicket,
} from "../../redux/Tickets/actions";
import {
  Button,
  Radio,
  Input,
  Modal,
  Form,
  Select,
  Spin,
  Collapse,
} from "antd";

class TicketCreation extends React.PureComponent {
  options = [
    { label: "Ticket de Bem", value: "1" },
    { label: "Ticket Predial", value: "2" },
    { label: "Ticket de Procedimento", value: "3" },
  ];

  createTicket = () => {
    const { form, onCreateTicket, onCloseModal } = this.props;

    const ticketData = {
      ticketType: form.ticketType,
      company: form.company,
      buildingType: form.buildingType,
      description: form.description,
      priority: form.priority,
      deadline: form.deadline,
      assignee: form.assignee,
      status: "open",
    };
    onCreateTicket(ticketData);
    onCloseModal();
  };

  render() {
    const {
      visible,
      onCloseModal,
      formLoading,
      loading,
      companies,
      onFormChange,
      onFetchCompanies,
      onFetchAssets,
      onFetchBuildingTypes,
      onFetchProcedures,
      form,
      procedures,
      assets,
      buildingTypes,
      users,
      onFetchUsers,
    } = this.props;

    const assetsForm = (
      <Form.Item label="Bem">
        <Select
          value={form.asset}
          className={!form.company ? styles.Disabled : null}
          onChange={(value) => onFormChange(["asset", value])}
          allowClear
          onDropdownVisibleChange={() => onFetchAssets(form.company)}
          notFoundContent={formLoading ? <Spin size="small" /> : null}
        >
          {assets.map((a) => (
            <Select.Option key={a}>{a}</Select.Option>
          ))}
        </Select>
      </Form.Item>
    );

    const buildingTypeForm = (
      <Form.Item label="Tipo Predial">
        <Select
          value={form.buildingType}
          className={!form.company ? styles.Disabled : null}
          onChange={(value) => onFormChange(["buildingType", value])}
          allowClear
          onDropdownVisibleChange={() => onFetchBuildingTypes(form.company)}
          notFoundContent={formLoading ? <Spin size="small" /> : null}
        >
          {buildingTypes.map((p) => (
            <Select.Option key={p}>{p}</Select.Option>
          ))}
        </Select>
      </Form.Item>
    );

    const proceduresForm = (
      <Form.Item label="Procedimento">
        <Select
          value={form.procedure}
          className={!form.company ? styles.Disabled : null}
          onChange={(value) => onFormChange(["procedure", value])}
          allowClear
          onDropdownVisibleChange={() => onFetchProcedures(form.company)}
          onMouseEnter={() => onFetchProcedures(form.company)}
          notFoundContent={formLoading ? <Spin size="small" /> : null}
        >
          {procedures.map((p) => (
            <Select.Option key={p}>{p}</Select.Option>
          ))}
        </Select>
      </Form.Item>
    );

    let ticketTypeForm;
    switch (form.ticketType) {
      case "1":
        ticketTypeForm = assetsForm;
        break;
      case "2":
        ticketTypeForm = buildingTypeForm;
        break;
      case "3":
        ticketTypeForm = proceduresForm;
        break;
      default:
        break;
    }

    return (
      <>
        <Modal
          className={styles.Modal}
          title="Novo Ticket"
          visible={visible}
          onOk={this.createTicket}
          onCancel={onCloseModal}
          footer={[
            <Button shape="round" key="back" onClick={onCloseModal}>
              Cancelar
            </Button>,
            <Button
              shape="round"
              key="submit"
              type="primary"
              onClick={this.createTicket}
            >
              Criar Ticket
            </Button>,
          ]}
        >
          <Radio.Group
            defaultValue={form.ticketType}
            buttonStyle="solid"
            style={{ marginBottom: "24px" }}
            options={this.options}
            optionType="button"
            onChange={(e) => onFormChange(["ticketType", e.target.value])}
          />
          <Form
            colon={false}
            labelCol={{ span: 5, offset: 1 }}
            onFinish={this.createTicket}
          >
            <Form.Item label="Empresa">
              <Select
                onChange={(value) => onFormChange(["company", value])}
                allowClear
                showSearch
                onDropdownVisibleChange={onFetchCompanies}
                notFoundContent={formLoading ? <Spin size="small" /> : null}
              >
                {companies.map((c) => (
                  <Select.Option key={c}>{c}</Select.Option>
                ))}
              </Select>
            </Form.Item>
            {ticketTypeForm}
            <Form.Item label="Descrição">
              <Input.TextArea
                onChange={(e) => onFormChange(["description", e.target.value])}
              />
            </Form.Item>
            <Collapse ghost>
              <Collapse.Panel header="Opções Avançadas">
                <Form.Item label="Prioridade">
                  <Select
                    defaultValue="low"
                    onChange={(value) => onFormChange(["priority", value])}
                  >
                    <Select.Option value="low" key="low">
                      <span className={styles.Low}>
                        <CaretDownOutlined />
                        <span>Baixa</span>
                      </span>
                    </Select.Option>
                    <Select.Option value="middle" key="middle">
                      <span className={styles.Middle}>
                        <CaretRightOutlined />
                        <span>Média</span>
                      </span>
                    </Select.Option>
                    <Select.Option value="high" key="high">
                      <span className={styles.High}>
                        <CaretUpOutlined />
                        <span>Alta</span>
                      </span>
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Prazo"
                  onChange={(e) => onFormChange(["deadline", e.target.value])}
                >
                  <input type="date" />
                </Form.Item>
                <Form.Item label="Responsável">
                  <Select
                    className={!form.company ? styles.Disabled : null}
                    onChange={(value) => onFormChange(["assignee", value])}
                    allowClear
                    onDropdownVisibleChange={() => onFetchUsers(form.company)}
                    onMouseEnter={() => onFetchUsers(form.company)}
                    notFoundContent={formLoading ? <Spin size="small" /> : null}
                  >
                    {users.map((u) => (
                      <Select.Option key={u}>{u}</Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item label="Tags">
                  <Select mode="tags"></Select>
                </Form.Item>
              </Collapse.Panel>
            </Collapse>
          </Form>
        </Modal>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  visible: state.tickets.showModal,
  formLoading: state.tickets.formLoading,
  loading: state.tickets.loading,
  form: state.tickets.form,
  companies: state.tickets.companies,
  procedures: state.tickets.procedures,
  assets: state.tickets.assets,
  buildingTypes: state.tickets.buildingTypes,
  users: state.tickets.users,
});

const mapDispatchToProps = (dispatch) => ({
  onShowModal: () => dispatch(showModal()),
  onFormChange: (form) => dispatch(changeForm(form)),
  onCloseModal: () => dispatch(closeModal()),
  onFetchCompanies: () => dispatch(getCompanies()),
  onFetchAssets: (company) => dispatch(getAssets(company)),
  onFetchBuildingTypes: (company) => dispatch(getBuildingTypes(company)),
  onFetchProcedures: (company) => dispatch(getProcedures(company)),
  onFetchUsers: (company) => dispatch(getUsers(company)),
  onResetForm: () => dispatch(resetForm()),
  onCreateTicket: (ticketData) => dispatch(createTicket(ticketData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketCreation);
