import React, { useContext } from 'react';

import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

import SWContext from '../../context/SWContext';

const useStyles = makeStyles({
  activeFilter: {
    border: '1px solid black',
    boxSizing: 'border-box',
    margin: 2,
    padding: 20,
  },
  filtersBox: {
    display: 'flex',
    height: 73,
    justifyContent: 'center',
  },
});

export default function ActiveFilters() {
  const classes = useStyles();
  const {
    filters: { filterByNumericValues },
    removeNumericFilter,
  } = useContext(SWContext);
  return (
    <div className={classes.filtersBox}>
      {filterByNumericValues.map((filter) => (
        <div className={classes.activeFilter} key={filter.column}>
          {`${filter.column} ${filter.comparison} ${filter.value}`}
          <CloseIcon onClick={() => removeNumericFilter(filter.column)} color="secondary" />
        </div>
      ))}
    </div>
  );
}
