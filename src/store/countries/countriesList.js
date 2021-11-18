// import axios from 'axios';

const GET_COVID_COUNTRIES = '/react-capstone/covid/GET_COVID_COUNTRIES';

// const baseUrl = process.env.REACT_APP_BASE_URL;

export const getCountriesAction = (data) => ({ /* try {
  const { data } = await axios.get(`${baseUrl}/api/countries`);
  dispatch({ type: GET_COVID_COUNTRIES, payload: data.countries });
} catch (error) {
  console.log('error', error.message);
} */
  type: GET_COVID_COUNTRIES,
  payload: data,
});

export default function countriesListReducer(state = null, action) {
  switch (action.type) {
    case GET_COVID_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
}
