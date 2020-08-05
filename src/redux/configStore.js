import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ticketsReducer from './Tickets/reducer';
import authReducer from './Auth/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  tickets: ticketsReducer
})

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;