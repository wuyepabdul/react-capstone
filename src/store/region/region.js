export const GET_REGION_DATA = '/react-capstone/covid/GET_REGION_DATA';

export const getRegionDetailsAction = (data) => ({
  type: GET_REGION_DATA,
  payload: data,
});

export default function regionReducer(state = null, action) {
  switch (action.type) {
    case GET_REGION_DATA:
      return action.payload;
    default:
      return state;
  }
}
