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
  GET_USERS_SUCCESS,
  GET_BUILDING_TYPES_SUCCESS,
  GET_BUILDING_TYPES_FAIL,
  GET_USERS_START,
  GET_USERS_FAIL,
  TICKET_FORM_RESET,
  CREATE_TICKET_START,
  CREATE_TICKET_SUCCESS,
  CREATE_TICKET_FAIL,
} from "./actionTypes";

const initialState = {
  showModal: false,
  formLoading: false,
  companies: [],
  procedures: [],
  assets: [],
  buildingTypes: [],
  users: [],
  form: {
    ticketType: "1",
    priority: "low",
  },
  loading: false,
};

export const updateObject = (oldObject, updatedProperties) => ({
  ...oldObject,
  ...updatedProperties,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TICKET_FORM_CHANGE:
      return {
        ...state,
        form: { ...state.form, [action.form[0]]: action.form[1] },
      };

    case TICKET_FORM_RESET:
      return { ...state, form: { ...state.form, asset: null } };

    case SHOW_TICKET_CREATION_MODAL:
      return updateObject(state, { showModal: true });

    case CLOSE_TICKET_CREATION_MODAL:
      return updateObject(state, { showModal: false });

    case GET_COMPANIES_START:
      return updateObject(state, { formLoading: true });

    case GET_COMPANIES_SUCCESS:
      return updateObject(state, {
        formLoading: false,
        companies: action.companiesInfo,
      });

    case GET_COMPANIES_FAIL:
      return updateObject(state, { formLoading: false });

    case GET_PROCEDURES_START:
      return updateObject(state, { formLoading: true });

    case GET_PROCEDURES_SUCCESS:
      return updateObject(state, {
        formLoading: false,
        procedures: action.procedures,
      });

    case GET_PRODEDURES_FAIL:
      return updateObject(state, { formLoading: false, error: action.err });

    case GET_ASSETS_START:
      return updateObject(state, { formLoading: true });

    case GET_ASSETS_SUCCESS:
      return updateObject(state, { formLoading: false, assets: action.assets });

    case GET_ASSETS_FAIL:
      return updateObject(state, { formLoading: false, err: action.err });

    case GET_BUILDING_TYPES_START:
      return updateObject(state, { formLoading: true });

    case GET_BUILDING_TYPES_SUCCESS:
      return updateObject(state, {
        formLoading: false,
        buildingTypes: action.buildingTypes,
      });

    case GET_BUILDING_TYPES_FAIL:
      return updateObject(state, { formLoading: false, error: action.err });

    case GET_USERS_START:
      return updateObject(state, { formLoading: true });

    case GET_USERS_SUCCESS:
      return updateObject(state, { formLoading: false, users: action.users });

    case GET_USERS_FAIL:
      return updateObject(state, { formLoading: false, err: action.err });

    case CREATE_TICKET_START:
      return updateObject(state, { loading: true });
    case CREATE_TICKET_SUCCESS:
      return updateObject(state, { loading: false });
    case CREATE_TICKET_FAIL:
      return updateObject(state, { loading: false });
    default:
      return state;
  }
};

export default reducer;
