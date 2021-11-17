export const GET_COUNTRY_DATA = '/react-capstone/covid/GET_COUNTRY_DATA';

export const getCountryDetailsAction = (data) => ({
  type: GET_COUNTRY_DATA,
  payload: data,
});

export default function countryReducer(state = null, action) {
  switch (action.type) {
    case GET_COUNTRY_DATA:
      return action.payload;
    default:
      return state;
  }
}
