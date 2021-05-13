import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Filters from './components/Filters';
import Table from './components/Table';

import Provider from './context/Provider';
import ActiveFilters from './components/ActiveFilters';

const useStyles = makeStyles({
  box: {
    padding: 20,
    boxSizing: 'border-box',
  },
});

function App() {
  const classes = useStyles();
  return (
    <Provider>
      <div className={classes.box}>
        <Filters />
        <ActiveFilters />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
