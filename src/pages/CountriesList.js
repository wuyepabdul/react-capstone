import React, { useEffect } from 'react';
import PropsType from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Country from '../components/Country';
import { getCountriesAction } from '../store/countries/countriesList';
import { getCountryDetailsAction } from '../store/country/country';

const CountriesList = ({ history }) => {
  const dispatch = useDispatch();
  const countriesList = useSelector((state) => state.countriesList);

  useEffect(() => {
    if (!countriesList) {
      dispatch(getCountriesAction());
    }
  }, [dispatch]);

  const handleClick = (endPoint) => {
    dispatch(getCountryDetailsAction(endPoint));
    history.push('/country');
  };

  const handleKeyDown = (endPoint) => {
    dispatch(getCountryDetailsAction(endPoint));
    history.push('/country');
  };
  return (
    <div>
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

CountriesList.propTypes = {
  history: PropsType.instanceOf(Object),
};

CountriesList.defaultProps = {
  history: PropsType.instanceOf(Object),
};

export default CountriesList;
