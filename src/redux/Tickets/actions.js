import axios from "../../axios";

import {
  GET_COMPANIES_START,
  GET_COMPANIES_SUCCESS,
  GET_COMPANIES_FAIL,
  SHOW_TICKET_CREATION_MODAL,
  CLOSE_TICKET_CREATION_MODAL,
  GET_PROCEDURES_START,
  GET_PROCEDURES_SUCCESS,
  GET_PRODEDURES_FAIL,
  TICKET_FORM_CHANGE,
  GET_ASSETS_START,
  GET_ASSETS_SUCCESS,
  GET_ASSETS_FAIL,
  GET_BUILDING_TYPES_START,
  GET_BUILDING_TYPES_SUCCESS,
  GET_BUILDING_TYPES_FAIL,
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  TICKET_FORM_RESET,
  CREATE_TICKET_START,
  CREATE_TICKET_SUCCESS,
  CREATE_TICKET_FAIL,
} from "./actionTypes";

export const showModal = () => ({
  type: SHOW_TICKET_CREATION_MODAL,
});

export const closeModal = () => ({
  type: CLOSE_TICKET_CREATION_MODAL,
});

export const changeForm = (form) => {
  return {
    type: TICKET_FORM_CHANGE,
    form,
  };
};

export const resetForm = () => ({
  type: TICKET_FORM_RESET,
});

export const getCompaniesStart = () => ({
  type: GET_COMPANIES_START,
});

export const getCompaniesSuccess = (companiesInfo) => ({
  type: GET_COMPANIES_SUCCESS,
  companiesInfo,
});

export const getCompaniesFail = (err) => ({
  type: GET_COMPANIES_FAIL,
  err,
});

export const getCompanies = () => {
  return (dispatch) => {
    dispatch(getCompaniesStart());
    axios
      .get(`companies.json`)
      .then((response) => {
        const companiesInfo = Object.keys(response.data);
        dispatch(getCompaniesSuccess(companiesInfo));
      })
      .catch((err) => {
        dispatch(getCompaniesFail(err));
      });
  };
};

export const getProceduresStart = (companyName) => ({
  type: GET_PROCEDURES_START,
  companyName,
});

export const getProceduresSuccess = (procedures) => ({
  type: GET_PROCEDURES_SUCCESS,
  procedures,
});

export const getProceduresFail = (err) => ({
  type: GET_PRODEDURES_FAIL,
  err,
});

export const getProcedures = (companyName) => {
  return (dispatch) => {
    dispatch(getProceduresStart(companyName));
    axios
      .get(`/companies/${companyName}/procedures.json`)
      .then((response) => {
        const procedures = response.data.filter((p) => p);
        dispatch(getProceduresSuccess(procedures));
      })
      .catch((err) => {
        dispatch(getProceduresFail(err));
      });
  };
};

export const getAssetsStart = (companyName) => ({
  type: GET_ASSETS_START,
  companyName,
});

export const getAssetsSuccess = (assets) => ({
  type: GET_ASSETS_SUCCESS,
  assets,
});

export const getAssetsFail = (err) => ({
  type: GET_ASSETS_FAIL,
  err,
});

export const getAssets = (companyName) => {
  return (dispatch) => {
    dispatch(getAssetsStart(companyName));
    axios
      .get(`/companies/${companyName}/assets.json`)
      .then((response) => {
        const assets = response.data.filter((a) => a);
        dispatch(getAssetsSuccess(assets));
      })
      .catch((err) => {
        dispatch(getAssetsFail(err));
      });
  };
};

export const getBuildingTypesStart = (companyName) => ({
  type: GET_BUILDING_TYPES_START,
  companyName,
});

export const getBuildingTypesSuccess = (buildingTypes) => ({
  type: GET_BUILDING_TYPES_SUCCESS,
  buildingTypes,
});

export const getBuildingTypesFail = (err) => ({
  type: GET_BUILDING_TYPES_FAIL,
  err,
});

export const getBuildingTypes = (companyName) => {
  return (dispatch) => {
    dispatch(getBuildingTypesStart(companyName));
    axios
      .get(`/companies/${companyName}/buildingTypes.json`)
      .then((response) => {
        const buildingTypes = response.data.filter((b) => b);
        dispatch(getBuildingTypesSuccess(buildingTypes));
      })
      .catch((err) => {
        dispatch(getBuildingTypesFail(err));
      });
  };
};

export const getUsersStart = (companyName) => ({
  type: GET_USERS_START,
  companyName,
});

export const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  users,
});

export const getUsersFail = (err) => ({
  type: GET_USERS_FAIL,
  err,
});

export const getUsers = (companyName) => {
  return (dispatch) => {
    dispatch(getUsersStart(companyName));
    axios
      .get(`/companies/${companyName}/users.json`)
      .then((response) => {
        const users = response.data.filter((b) => b);
        dispatch(getUsersSuccess(users));
      })
      .catch((err) => {
        dispatch(getUsersFail(err));
      });
  };
};

export const createTicketStart = (ticketData) => ({
  type: CREATE_TICKET_START,
  ticketData,
});

export const createTicketSuccess = (ticketDataResponse) => ({
  type: CREATE_TICKET_SUCCESS,
  ticketDataResponse,
});

export const createTicketFail = (err) => ({
  type: CREATE_TICKET_FAIL,
  err,
});

export const createTicket = (ticketData) => {
  return (dispatch) => {
    dispatch(createTicketStart(ticketData));
    axios
      .post(`/tickets.json`, ticketData)
      .then((response) => {
        const newTicket = response.data;
        dispatch(createTicketSuccess(newTicket));
      })
      .catch((err) => {
        dispatch(createTicketFail(err));
      });
  };
};
