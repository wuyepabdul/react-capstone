import React from 'react';
import PropsType from 'prop-types';

const Country = ({ country, handleKeyDown, handleClick }) => (
  <div
    onClick={() => handleClick(country.links[0].href, country.id)}
    onKeyDown={() => handleKeyDown(country.links[0].href, country.id)}
    className="country-div"
    key={country.id}
    role="button"
    tabIndex={0}
  >
    <p>icon</p>
    <div>
      <h1>{country.name}</h1>
      <p>number</p>
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
  handleKeyDown: PropsType.func,
};

Country.defaultProps = {
  country: { },
  handleClick: PropsType.func,
  handleKeyDown: PropsType.func,
};

export default Country;
