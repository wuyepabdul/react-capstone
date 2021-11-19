const GET_COVID_COUNTRIES = '/react-capstone/covid/GET_COVID_COUNTRIES';

export const getCountriesAction = (data) => ({
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
