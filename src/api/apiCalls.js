import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchCountryData = async (endPoint) => {
  const { data } = await axios.get(`${baseUrl}/${endPoint}`);
  return data;
};

export const fetchCountries = async () => {
  const { data } = await axios.get(`${baseUrl}/api/countries`);
  return data;
};
