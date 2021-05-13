import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SearchBar from './NameSearch';
import ColumnFilter from './Columns';
import ComparisonFilter from './Comparison';
import ValueFilter from './Values';
import FilterButton from './FilterButton';

const useStyles = makeStyles({
  filters: {
    display: 'flex',
    padding: 10,
    boxSizing: 'border-box',
  },
});

export default function Filters() {
  const classes = useStyles();
  return (
    <div className={classes.filters}>
      <SearchBar />

      <ColumnFilter />

      <ComparisonFilter />

      <ValueFilter />

      <FilterButton />
    </div>
  );
}
