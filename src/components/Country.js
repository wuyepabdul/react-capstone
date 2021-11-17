import React, { useEffect } from 'react';
import PropsType from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import CovidVirus from './CovidVirus';

const Country = ({ country, handleClick }) => {
  const dispatch = useDispatch();
  const { regionDetails } = useSelector((state) => state);
  useEffect(() => {
    if (!regionDetails) {
      console.log(dispatch);
    }
  }, []);
  return (
    <div
      onClick={() => handleClick(country.links[0].href, country.id)}
      onKeyDown={(e) => e.key === 'Enter' && handleClick(country.links[0].href, country.id)}
      className="country-div"
      key={country.id}
      role="button"
      tabIndex={0}
    >
      <CovidVirus />
      <div className="country">
        <p><i className="fas fa-arrow-circle-right" /></p>
        <div>
          <h1>{country.name}</h1>
          <p>number</p>
        </div>
      </div>
    </div>
  );
};

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
