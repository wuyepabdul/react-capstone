import React from 'react';
import PropsType from 'prop-types';
import CovidVirus from './CovidVirus';

const Country = ({ country, handleClick }) => (
  <div
    onClick={() => handleClick(country.links[0].href, country.id)}
    onKeyDown={(e) => e.key === 'Enter' && handleClick(country.links[0].href, country.id)}
    className="country-div country-div2 country-div3 country-odd-div country-even-div"
    key={country.id}
    role="button"
    tabIndex={0}
    data-testid="country-div"
  >
    <CovidVirus />
    <div className="country">
      <p><i className="fas fa-arrow-circle-right" /></p>
      <div>
        <h1>{country.name}</h1>
      </div>
    </div>
  </div>
);

Country.propTypes = {
  country: PropsType.shape({
    links: PropsType.instanceOf(Array),
    name: PropsType.string,
    id: PropsType.string,
  }),
  handleClick: PropsType.func,
};

Country.defaultProps = {
  country: {},
  handleClick: PropsType.func,
};

export default Country;
