import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
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
});
