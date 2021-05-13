import React, { useContext } from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import SWContext from '../../../context/SWContext';

const useStyles = makeStyles({
  box: {
    marginLeft: 18,
    width: 120,
  },
});

export default function Values() {
  const classes = useStyles();
  const { setValueFilter } = useContext(SWContext);

  return (
    <TextField
      className={classes.box}
      label="Valor"
      onChange={({ target }) => setValueFilter(target.value)}
    />
  );
}
