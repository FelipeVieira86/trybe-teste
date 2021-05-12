import { useContext } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { TableCell, TableHead, TableRow } from '@material-ui/core';

import SWContext from '../../../context/SWContext';

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: '#000',
    color: '#FFF',
  },
}))(TableCell);

export default function Head() {
  const { data } = useContext(SWContext);

  function renderHeaderKeys(obj) {
    if (obj) {
      const headerKeys = Object.keys(obj).filter((key) => key !== 'residents');

      return headerKeys.map((key, index) => (
        <StyledTableCell key={key} align={index > 0 ? 'right' : 'left'}>{key}</StyledTableCell>
      ));
    }
  }

  return (
    <TableHead>
      <TableRow>{renderHeaderKeys(data[0])}</TableRow>
    </TableHead>
  );
}
