import React, { useContext } from 'react';

import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Select,
  Button,
  MenuItem,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import SWContext from '../../../context/SWContext';

const useStyles = makeStyles({
  btn: {
    width: 100,
    height: 30,
    alignSelf: 'center',
    margin: 10,
  },
});

export default function SortFilter() {
  const classes = useStyles();
  const {
    columns,
    sortValue,
    setColumnValue,
    columnValue,
    setSortValue,
    setSort,
  } = useContext(SWContext);

  const handleChange = ({ target }) => {
    setSortValue(target.value);
  };

  const handleColumnChange = ({ target }) => {
    setColumnValue(target.value);
  };

  return (
    <div>
      <FormControl>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={columnValue}
          onChange={handleColumnChange}
        >
          <MenuItem value="name">name</MenuItem>
          {columns.map((option) => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <RadioGroup row name="sort" value={sortValue} onChange={handleChange}>
          <FormControlLabel value="ASC" control={<Radio />} label="ASC" />
          <FormControlLabel value="DESC" control={<Radio />} label="DESC" />
        </RadioGroup>
        <Button
          className={classes.btn}
          onClick={() => setSort()}
          type="button"
          color="primary"
          variant="contained"
        >
          Sort
        </Button>
      </FormControl>
    </div>
  );
}
