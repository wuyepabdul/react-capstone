import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCountryData } from '../api/apiCalls';
import Country from '../components/Country';
import { getCountriesAction } from '../store/countries/countriesList';
import {
  getCountryDetailsAction,
} from '../store/country/country';

const CountriesList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countriesList = useSelector((state) => state.countriesList);

  useEffect(() => {
    if (!countriesList) {
      dispatch(getCountriesAction());
    }
  }, [dispatch]);

  const handleClick = (endPoint, id) => {
    fetchCountryData(endPoint)
      .then((response) => {
        console.log(response.countries[0]);
        dispatch(getCountryDetailsAction(response.countries[0]));
        navigate(`/country/${id}`);
      })
      .catch((error) => console.log(error.message));

    /* setTimeout(() => {
      navigate(`/country/${id}`);
    }, 1000); */
  };

  const handleKeyDown = (endPoint, id) => {
    console.log(endPoint, id);
    /* dispatch(getCountryDetailsAction(endPoint));
    setTimeout(() => {
      navigate(`/country/${id}`);
    }, 1000); */
  };
  return (
    <div className="countries-container">
      {countriesList
        && countriesList.map((country) => (
          <Country
            key={country.id}
            country={country}
            handleClick={handleClick}
            handleKeyDown={handleKeyDown}
          />
        ))}
    </div>
  );
};

export default CountriesList;
