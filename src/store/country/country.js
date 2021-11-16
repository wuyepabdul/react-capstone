import axios from 'axios';

const GET_COUNTRY_DATA = '/react-capstone/covid/GET_COUNTRY_DATA';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getCountryDetailsAction = (endPoint) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${baseUrl}/${endPoint}`);
    dispatch({ type: GET_COUNTRY_DATA, payload: data.countries[0] });
  } catch (error) {
    console.log('error', error.message);
  }
};

export default function countryReducer(state = null, action) {
  switch (action.type) {
    case GET_COUNTRY_DATA:
      return action.payload;
    default:
      return state;
  }
}