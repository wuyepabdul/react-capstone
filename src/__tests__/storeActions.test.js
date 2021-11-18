import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import { getCountriesAction } from '../store/countries/countriesList';
import { getCountryDetailsAction } from '../store/country/country';

describe('AppRouting and Navbar', () => {
  afterEach(() => {
    cleanup();
  });
  //   const initialState = {
  //     countriesList: [],
  //     countryDetails: {},
  //   };
  //   const mockStore = configureStore();
  //   const store = mockStore(initialState);

  const GET_COUNTRY_DATA = '/react-capstone/covid/GET_COUNTRY_DATA';
  const GET_COVID_COUNTRIES = '/react-capstone/covid/GET_COVID_COUNTRIES';

  test('Country action works as expected', () => {
    const data = {
      id: 'northern_mariana_islands',
      name: 'Northern Mariana Islands',
    };
    const expectedResult = {
      type: GET_COUNTRY_DATA,
      payload: data,
    };
    expect(getCountryDetailsAction(data)).toEqual(expectedResult);
  });
  test('Countries List action works as expected', () => {
    const data = [
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
    const expectedResult = {
      type: GET_COVID_COUNTRIES,
      payload: data,
    };
    expect(getCountriesAction(data)).toEqual(expectedResult);
  });
});
