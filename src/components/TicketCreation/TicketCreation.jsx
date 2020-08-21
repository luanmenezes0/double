import React from "react";
import styles from "./TicketCreation.module.css";
import { connect } from "react-redux";
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
  changeTicketType,
  getTags,
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
  message,
} from "antd";
import PriorityBadge from "../UI/PriorityBadge";

class TicketCreation extends React.PureComponent {
  options = [
    { label: "Ticket de Bem", value: "1" },
    { label: "Ticket Predial", value: "2" },
    { label: "Ticket de Procedimento", value: "3" },
  ];

  createTicket = () => {
    const {
      form,
      onCreateTicket,
      onCloseModal,
      onResetForm,
      ticketType,
    } = this.props;

    if (
      !form.company ||
      !form.description ||
      !(form.asset || form.buildingType || form.procedure)
    ) {
      message.warning("Preencha todos os campos obrigatórios");
    } else {
      const ticketData = {
        ticketType: ticketType,
        company: form.company,
        asset: form.asset,
        buildingType: form.buildingType,
        procedure: form.procedure,
        description: form.description,
        priority: form.priority,
        deadline: form.deadline,
        assignee: form.assignee,
        tags: form.tags,
        status: "open",
      };
      onCreateTicket(ticketData);
      onCloseModal();
      onResetForm();
      message.success("Ticket criado com sucesso!");
    }
  };

  render() {
    const {
      visible,
      onCloseModal,
      formLoading,
      companies,
      onFormChange,
      onFetchCompanies,
      onFetchAssets,
      onFetchBuildingTypes,
      onFetchProcedures,
      form,
      loading,
      procedures,
      assets,
      buildingTypes,
      users,
      onFetchUsers,
      onResetForm,
      onTicketTypeChange,
      ticketType,
      onFetchTags,
      tags,
    } = this.props;

    const assetsForm = (
      <Form.Item
        required
        className={styles.FormItem}
        label={<span className={styles.FormLabel}>Bem</span>}
      >
        <Select
          value={form.asset}
          className={!form.company ? styles.Disabled : null}
          onChange={(value) => onFormChange(["asset", value])}
          allowClear
          onFocus={() => onFetchAssets(form.company)}
          notFoundContent={formLoading ? <Spin size="small" /> : null}
        >
          {assets.map((a) => (
            <Select.Option key={a}>{a}</Select.Option>
          ))}
        </Select>
      </Form.Item>
    );

    const buildingTypeForm = (
      <Form.Item
        required
        className={styles.FormItem}
        label={<span className={styles.FormLabel}>Tipo Predial</span>}
      >
        <Select
          value={form.buildingType}
          className={!form.company ? styles.Disabled : null}
          onChange={(value) => onFormChange(["buildingType", value])}
          allowClear
          onFocus={() => onFetchBuildingTypes(form.company)}
          notFoundContent={formLoading ? <Spin size="small" /> : null}
        >
          {buildingTypes.map((p) => (
            <Select.Option key={p}>{p}</Select.Option>
          ))}
        </Select>
      </Form.Item>
    );

    const proceduresForm = (
      <Form.Item
        required
        className={styles.FormItem}
        label={<span className={styles.FormLabel}>Procedimento</span>}
      >
        <Select
          value={form.procedure}
          className={!form.company ? styles.Disabled : null}
          onChange={(value) => onFormChange(["procedure", value])}
          allowClear
          onFocus={() => onFetchProcedures(form.company)}
          notFoundContent={formLoading ? <Spin size="small" /> : null}
        >
          {procedures.map((p) => (
            <Select.Option key={p}>{p}</Select.Option>
          ))}
        </Select>
      </Form.Item>
    );

    let ticketTypeForm;
    switch (ticketType) {
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
        <Spin spinning={loading}>
          <Modal
            className={styles.Modal}
            title="Novo Ticket"
            visible={visible}
            onOk={this.createTicket}
            onCancel={() => {
              onCloseModal();
              onResetForm();
            }}
            footer={[
              <Button
                key="back"
                onClick={() => {
                  onCloseModal();
                  onResetForm();
                }}
              >
                Cancelar
              </Button>,
              <Button key="submit" type="primary" onClick={this.createTicket}>
                Criar Ticket
              </Button>,
            ]}
          >
            <div className={styles.RadioButtons}>
              <Radio.Group
                defaultValue={ticketType}
                buttonStyle="solid"
                style={{ marginBottom: "24px" }}
                options={this.options}
                optionType="button"
                onChange={(e) => {
                  onTicketTypeChange(e.target.value);
                  onResetForm();
                }}
              />
            </div>

            <Form
              colon={false}
              labelCol={{ span: 6, offset: 0 }}
              preserve={false}
              onFinish={this.createTicket}
            >
              <Form.Item
                className={styles.FormItem}
                label={<span className={styles.FormLabel}>Empresa</span>}
                required
              >
                <Select
                  value={form.company}
                  onChange={(value) => onFormChange(["company", value])}
                  allowClear
                  showSearch
                  onFocus={onFetchCompanies}
                  notFoundContent={formLoading ? <Spin size="small" /> : null}
                >
                  {companies.map((c) => (
                    <Select.Option key={c}>{c}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
              {ticketTypeForm}
              <Form.Item
                required
                className={styles.FormItem}
                label={<span className={styles.FormLabel}>Descrição</span>}
              >
                <Input.TextArea
                  value={form.description}
                  onChange={(e) =>
                    onFormChange(["description", e.target.value])
                  }
                />
              </Form.Item>
              <Collapse ghost>
                <Collapse.Panel
                  header={
                    <span className={styles.FormLabel}>Opções Avançadas</span>
                  }
                >
                  <Form.Item
                    className={styles.FormItem}
                    label={<span className={styles.FormLabel}>Prioridade</span>}
                  >
                    <Select
                      defaultValue="low"
                      onChange={(value) => onFormChange(["priority", value])}
                    >
                      <Select.Option value="low" key="low">
                        <PriorityBadge type="low" />
                      </Select.Option>
                      <Select.Option value="middle" key="middle">
                        <PriorityBadge type="middle" />
                      </Select.Option>
                      <Select.Option value="high" key="high">
                        <PriorityBadge type="high" />
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    className={styles.FormItem}
                    label={<span className={styles.FormLabel}>Prazo</span>}
                  >
                    <input
                      value={form.deadline || ""}
                      onChange={(e) =>
                        onFormChange(["deadline", e.target.value])
                      }
                      className={styles.DateInput}
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </Form.Item>
                  <Form.Item
                    className={styles.FormItem}
                    label={
                      <span className={styles.FormLabel}>Responsável</span>
                    }
                  >
                    <Select
                      className={!form.company ? styles.Disabled : null}
                      onChange={(value) => onFormChange(["assignee", value])}
                      value={form.assignee}
                      allowClear
                      onFocus={() => onFetchUsers(form.company)}
                      notFoundContent={
                        formLoading ? <Spin size="small" /> : null
                      }
                    >
                      {users.map((u) => (
                        <Select.Option key={u}>{u}</Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    className={styles.FormItem}
                    label={<span className={styles.FormLabel}>Tags</span>}
                  >
                    <Select
                      className={!form.company ? styles.Disabled : null}
                      onChange={(value) => onFormChange(["tags", value])}
                      value={form.tags}
                      allowClear
                      onFocus={() => onFetchTags(form.company)}
                      notFoundContent={
                        formLoading ? <Spin size="small" /> : null
                      }
                      mode="tags"
                    >
                      {tags.map((t) => (
                        <Select.Option key={t}>{t}</Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Collapse.Panel>
              </Collapse>
            </Form>
          </Modal>
        </Spin>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  visible: state.tickets.showModal,
  formLoading: state.tickets.formLoading,
  loading: state.tickets.loading,
  ticketType: state.tickets.ticketType,
  form: state.tickets.form,
  companies: state.tickets.companies,
  procedures: state.tickets.procedures,
  assets: state.tickets.assets,
  buildingTypes: state.tickets.buildingTypes,
  users: state.tickets.users,
  tags: state.tickets.tags,
});

const mapDispatchToProps = (dispatch) => ({
  onShowModal: () => dispatch(showModal()),
  onFormChange: (form) => dispatch(changeForm(form)),
  onTicketTypeChange: (type) => dispatch(changeTicketType(type)),
  onCloseModal: () => dispatch(closeModal()),
  onFetchCompanies: () => dispatch(getCompanies()),
  onFetchAssets: (company) => dispatch(getAssets(company)),
  onFetchBuildingTypes: (company) => dispatch(getBuildingTypes(company)),
  onFetchProcedures: (company) => dispatch(getProcedures(company)),
  onFetchUsers: (company) => dispatch(getUsers(company)),
  onResetForm: () => dispatch(resetForm()),
  onCreateTicket: (ticketData) => dispatch(createTicket(ticketData)),
  onFetchTags: (company) => dispatch(getTags(company)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketCreation);
