import { useContext } from 'react';

import { TableBody, TableCell, TableRow } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import SWContext from '../../../context/SWContext';

const Films = {
  'https://swapi-trybe.herokuapp.com/api/films/1/': 'A New Hope',
  'https://swapi-trybe.herokuapp.com/api/films/2/': 'The Empire Strikes Back',
  'https://swapi-trybe.herokuapp.com/api/films/3/': 'Return of the Jedi',
  'https://swapi-trybe.herokuapp.com/api/films/4/': 'The Phantom Menace',
  'https://swapi-trybe.herokuapp.com/api/films/5/': 'Attack of the Clones',
  'https://swapi-trybe.herokuapp.com/api/films/6/': 'Revenge of the Sith',
};

const StyledTableCell = withStyles(() => ({
  body: {
    fontSize: 12,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  films: {
    minWidth: 150,
  },
  film: {
    margin: 0,
  }
});

export default function Body() {
  const classes = useStyles();
  
  const { data, filters: { filterByName: { name } } } = useContext(SWContext);

  const filteredData = data.filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()))

  return (
    <TableBody>
      {filteredData.map((planet) => (
        <StyledTableRow key={planet.name}>
          <StyledTableCell>{planet.name}</StyledTableCell>
          <StyledTableCell align="right">{planet.rotation_period}</StyledTableCell>
          <StyledTableCell align="right">{planet.orbital_period}</StyledTableCell>
          <StyledTableCell align="right">{planet.diameter}</StyledTableCell>
          <StyledTableCell align="right">{planet.climate}</StyledTableCell>
          <StyledTableCell align="right">{planet.gravity}</StyledTableCell>
          <StyledTableCell align="right">{planet.terrain}</StyledTableCell>
          <StyledTableCell align="right">{planet.surface_water}</StyledTableCell>
          <StyledTableCell align="right">{planet.population}</StyledTableCell>
          <StyledTableCell align="right" className={classes.films}>
            {planet.films.map((film) => (
              <p key={film} className={classes.film}>{Films[film]}</p>
            ))}
          </StyledTableCell>
          <StyledTableCell align="right">{planet.created}</StyledTableCell>
          <StyledTableCell align="right">{planet.edited}</StyledTableCell>
          <StyledTableCell align="right">{planet.url}</StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
}
