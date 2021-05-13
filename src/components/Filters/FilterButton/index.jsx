import React, { useContext } from 'react';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SWContext from '../../../context/SWContext';

const useStyles = makeStyles({
  btn: {
    width: 100,
    height: 30,
    alignSelf: 'flex-end',
    marginLeft: 18,
  },
});

export default function FilterButton() {
  const classes = useStyles();
  const { addNewFilter, columnFilter, comparisonFilter, valueFilter } = useContext(SWContext);

  return (
    <Button
      className={classes.btn}
      type="button"
      variant="contained"
      color="primary"
      onClick={() => addNewFilter(columnFilter, comparisonFilter, valueFilter)}
    >
      Procurar
    </Button>
  );
}
