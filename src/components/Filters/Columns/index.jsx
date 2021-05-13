import React, { useContext } from 'react';

import { MenuItem, Select, InputLabel, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SWContext from '../../../context/SWContext';

const useStyles = makeStyles({
  box: {
    marginLeft: 18,
  },
  select: {
    minWidth: 130,
  },
  noValue: {
    color: 'gray',
  },
});

const ColumnFilter = () => {
  const classes = useStyles();
  const { columns, columnFilter, setColumnFilter, filters } = useContext(SWContext);
  let newOptions = columns;
  filters.filterByNumericValues.forEach((filter) => {
    newOptions = newOptions.filter((option) => filter.column !== option);
  });

  const handleChange = ({ target }) => setColumnFilter(target.value);

  return (
    <FormControl className={classes.box}>
      <InputLabel id="columns">Coluna</InputLabel>

      <Select
        labelId="columns"
        value={columnFilter}
        onChange={handleChange}
        className={classes.select}
      >
        <MenuItem value="" className={classes.noValue}>
          Coluna
        </MenuItem>

        {newOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ColumnFilter;
