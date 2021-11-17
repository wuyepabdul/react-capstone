import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';

const CountryDetails = () => {
  const navigate = useNavigate();
  const countryDetails = useSelector((state) => state.countryDetails);
  const { countryName } = useParams();
  countryName.toLowerCase().trim();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      {countryDetails && (
        <div className="country-details">
          <div>
            <button type="button" onClick={handleClick}>
              {' '}
              <i className="fas fa-arrow-circle-left" />
              {' '}
              back
              {' '}
            </button>
          </div>
          <div>
            <h1>{countryName.toUpperCase()}</h1>
            affected regions -
            {' '}
            {countryDetails && countryDetails[`${countryName}`].length}
          </div>
          Country details
          {countryDetails[`${countryName}`].length > 0 ? (
            countryDetails[`${countryName}`].map((region) => (
              <div className="region" key={region.id}>
                {' '}
                <h1>{region.name}</h1>
                {' '}
              </div>
            ))
          ) : (
            <h1>No available info yet</h1>
          )}
        </div>
      )}
    </>
  );
};

export default CountryDetails;
