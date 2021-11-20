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

  test('navbar is loaded and contains elements', () => {
    render(<Provider store={store}><App /></Provider>);
    const navBar = screen.getByTestId('navigation-bar');
    expect(navBar).toBeInTheDocument();
    expect(navBar.childNodes[0].firstChild.textContent).toBe('Covid-19 Reports');
    expect(navBar.childNodes[1].textContent).toBe('March, 2020');
    expect(navBar.childNodes.length).toEqual(2);
  });
  test('HomePage/CountriesList Component is loaded', () => {
    render(<Provider store={store}><App /></Provider>);
    const countriesListComponent = screen.getByTestId('home-page');
    expect(countriesListComponent).toBeInTheDocument();
  });
  test('snapshot of Whole APP', () => {
    const mainAppComponent = render(<Provider store={store}><App /></Provider>);
    expect(mainAppComponent).toMatchSnapshot();
  });
});
