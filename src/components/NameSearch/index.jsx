import React, { useContext } from 'react';

import TextField from '@material-ui/core/TextField';

import SWContext from '../../context/SWContext';

export default function SearchBar() {
  const { filters, setFilters } = useContext(SWContext);
  return (<TextField label="Nome do Planeta" onChange={({ target }) => setFilters({...filters, filterByName: { name: target.value }})} />);
};
