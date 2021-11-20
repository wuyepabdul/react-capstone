import axios from 'axios';

const baseUrl = 'https://api.covid19tracking.narrativa.com';

export const fetchCountryData = async (endPoint) => {
  const { data } = await axios.get(`${baseUrl}/${endPoint}`);
  return data;
};

export const fetchCountriesList = async () => {
  const { data } = await axios.get(`${baseUrl}/api/countries`);
  return data;
};
