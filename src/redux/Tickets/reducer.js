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
  TICKET_TYPE_CHANGE,
  GET_TAGS_START,
  GET_TAGS_SUCCESS,
  GET_TAGS_FAIL,
  FETCH_TICKETS_START,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAIL,
  DELETE_TICKET_START,
  DELETE_TICKET_SUCCESS,
  DELETE_TICKET_FAIL,
} from "./actionTypes";

const initialState = {
  showModal: false,
  formLoading: false,
  companies: [],
  procedures: [],
  assets: [],
  buildingTypes: [],
  users: [],
  tags: [],
  ticketType: "1",
  form: {
    priority: "low",
  },
  loading: false,
  gridLoading: false,
  tickets: [],
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
      return { ...state, form: { ...initialState.form } };

    case TICKET_TYPE_CHANGE:
      return updateObject(state, { ticketType: action.ticketType });

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

    case GET_TAGS_START:
      return updateObject(state, { formLoading: true });

    case GET_TAGS_SUCCESS:
      return updateObject(state, { formLoading: false, tags: action.tags });

    case GET_TAGS_FAIL:
      return updateObject(state, { formLoading: false, err: action.err });

    case FETCH_TICKETS_START:
      return updateObject(state, { gridLoading: true });

    case FETCH_TICKETS_SUCCESS:
      return updateObject(state, {
        gridLoading: false,
        tickets: action.tickets,
      });
    
    case FETCH_TICKETS_FAIL:
      return updateObject(state, { gridLoading: false, err: action.err });

    case DELETE_TICKET_START:
      return updateObject(state, { gridLoading: true });
    case DELETE_TICKET_SUCCESS:
      return updateObject(state, { gridLoading: false });
    case DELETE_TICKET_FAIL:
      return updateObject(state, { gridLoading: false, err: action.err });
    default:
      return state;
  }
};

export default reducer;
