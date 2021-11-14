import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountriesAction } from '../store/countries/countriesList';

const CountriesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesAction());
  }, []);
  return (
    <div>
      COuntries
    </div>
  );
};

export default CountriesList;
