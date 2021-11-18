import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../App';

describe('AppRouting and Navbar', () => {
  afterEach(() => {
    cleanup();
  });
  const initialState = {
    countriesList: [],
    countryDetails: {},
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  test('CountriesList Component is loaded', () => {
    render(<Provider store={store}><App /></Provider>);
    const countriesListComponent = screen.getByTestId('home-page');
    expect(countriesListComponent).toBeInTheDocument();
  });
});
