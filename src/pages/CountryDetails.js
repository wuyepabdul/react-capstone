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
    <section className="country-details-container">
      {countryDetails && (
        <div className="country-details">
          <div className="country-details-heading">

            <div className="country-details-virus">
              <i className="fas fa-viruses" />
            </div>
            <div className="country-details-header-wrapper">
              <div className="back-button">
                <i className="fas fa-arrow-circle-left" onClick={handleClick} role="button" tabIndex={0} onKeyDown={handleClick}>
                  back
                </i>
              </div>
              <div className="country-name-wrapper">
                <h1>{countryName.toUpperCase()}</h1>
                <p>
                  {' '}
                  affected regions -
                  {' '}
                  {countryDetails && countryDetails[`${countryName}`].length}
                </p>
              </div>
            </div>
          </div>

          <div className="region-container">
            {countryDetails[`${countryName}`].length > 0 ? (
              countryDetails[`${countryName}`].map((region) => (
                <div className="region" key={region.id}>
                  {' '}
                  <div className="virus-region">
                    <p>
                      <i className="fas fa-viruses" />
                      <i className="fas fa-viruses" />
                      <i className="fas fa-viruses" />
                    </p>
                    <p>
                      <i className="fas fa-viruses" />
                      <i className="fas fa-viruses" />
                    </p>
                    <p>
                      <i className="fas fa-viruses" />
                    </p>
                  </div>
                  <h1>{region.name}</h1>
                  {' '}
                </div>
              ))
            ) : (
              <h1>No available info yet</h1>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default CountryDetails;
