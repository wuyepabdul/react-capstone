import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import countriesListReducer from '../store/countries/countriesList';
import countryReducer from '../store/country/country';

describe('Store reducers', () => {
  afterEach(() => {
    cleanup();
  });

  const GET_COUNTRY_DATA = '/react-capstone/covid/GET_COUNTRY_DATA';
  const GET_COVID_COUNTRIES = '/react-capstone/covid/GET_COVID_COUNTRIES';

  test('Country reducer returns null as initial state', () => {
    expect(countryReducer(undefined, {})).toBe(null);
  });
  test('Country reducer should set country details in state', () => {
    const initialState = null;
    const payload = {
      id: 'northern_mariana_islands',
      name: 'Northern Mariana Islands',
    };
    const action = {
      type: GET_COUNTRY_DATA,
      payload,
    };
    expect(countryReducer(initialState, action)).toBe(payload);
  });
  test('CountryList reducer returns null as initial state', () => {
    expect(countriesListReducer(undefined, {})).toBe(null);
  });
  test('CountryList reducer should set country details in state', () => {
    const initialState = null;
    const payload = [
      {
        id: 'taiwan*',
        links: [{
          href: '/api/countries/taiwan*/regions',
        }],
        name: 'Taiwan*',
      },
      {
        id: 'tunisia',
        links: [{
          href: '/api/countries/tunisia/regions',
        }],
        name: 'Tunisia',
      },
    ];
    const action = {
      type: GET_COVID_COUNTRIES,
      payload,
    };
    expect(countriesListReducer(initialState, action)).toBe(payload);
  });
});
