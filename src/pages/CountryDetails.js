import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const CountryDetails = () => {
  const countryDetails = useSelector((state) => state.countryDetails);
  const params = useParams();

  return (
    <div>
      Country details
      {console.log('countryDetails', countryDetails)}
      {console.log('params', params)}
    </div>
  );
};

export default CountryDetails;
