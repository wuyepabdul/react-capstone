import axios from 'axios';

const GET_COVID_COUNTRIES = '/react-capstone/covid/GET_COVID_COUNTRIES';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getContriesAction = () => async (dispatch) => {
  try {
    const data = await axios.get(`${baseUrl}`);
    console.log('data', data);
    dispatch({ type: GET_COVID_COUNTRIES, payload: data });
  } catch (error) {
    console.log('error', error.message);
  }
};

export default function countriesListReducer(state = null, action) {
  switch (action.type) {
    case GET_COVID_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
}
