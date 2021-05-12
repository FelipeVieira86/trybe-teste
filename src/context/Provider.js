import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Context from './SWContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  const [filters, setFilters] = useState({
    filterByName: { name: '' },
  });

  const context = {
    data,
    setData,
    filters,
    setFilters,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
