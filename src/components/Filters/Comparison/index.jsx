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

const options = ['maior que', 'igual a', 'menor que'];

export default function ComparisonFilter() {
  const classes = useStyles();
  const { comparisonFilter, setComparisonFilter } = useContext(SWContext);

  const handleChange = ({ target }) => setComparisonFilter(target.value);

  return (
    <FormControl className={classes.box}>
      <InputLabel id="columns">Comparação</InputLabel>

      <Select
        labelId="columns"
        value={comparisonFilter}
        onChange={handleChange}
        className={classes.select}
      >
        <MenuItem value="" className={classes.noValue}>
          Comparação
        </MenuItem>

        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
