import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import countriesListReducer from './countries/countriesList';
import countryReducer from './country/country';
import regionReducer from './region/region';

const reducers = combineReducers({
  countriesList: countriesListReducer,
  countryDetails: countryReducer,
  regionDetails: regionReducer,
});

const middleWares = [thunk, logger];

const configureStore = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleWares)),
);

export default configureStore;
