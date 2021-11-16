/* import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getCountryDetailsAction } from '../store/country/country';

const CountryDetails = ({ endPoint }) => {
  const dispatch = useDispatch();
  const countryDetails = useSelector((state) => state.countryDetails);

  useEffect(() => {
    console.log('endPoint', endPoint);
    if (!countryDetails) {
      dispatch(getCountryDetailsAction(endPoint));
    }
  }, []);
  return (
    <div>
      Country details
      {console.log('countryDetails', countryDetails)}
    </div>
  );
};

CountryDetails.propTypes = {
  endPoint: PropTypes.string.isRequired,
};

export default CountryDetails;
 */
import React from 'react';
import PropTypes from 'prop-types';

const CountryDetails = ({ params }) => (
  <div>
    country details
    {console.log('params', params)}

  </div>
);

CountryDetails.propTypes = {
  params: PropTypes.string.isRequired,
};

export default CountryDetails;
