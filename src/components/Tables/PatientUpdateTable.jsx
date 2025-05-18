import { MenuItem } from '@mui/material';
import PropTypes from 'prop-types';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  useTheme,
  TextField,
  Button
} from "@mui/material";
import { useState } from "react";
import { useThemeMode } from '../../context/ThemeProvider';

export const PatientUpdateTable = ({ columns, rows, onChange, onSubmit, selectOptions }) => {
  const { darkMode } = useThemeMode();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //height: '100vh', 
      }}
    >
      <Paper
        sx={{
          width: '60%',
          overflow: 'hidden',
          border: darkMode ? '1px solid var(--grey-900)' : '1px solid var(--grey-300)',
          borderRadius: '8px',
        }}

      >

        <TableContainer sx={{ }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  align="center"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '1.25rem',
                    backgroundColor: !darkMode ? 'var(--grey-100)' : undefined,
                    borderBottom: darkMode ? '1px solid var(--grey-800)' : '1px solid var(--grey-300)'
                  }}
                >
                  Datos del paciente
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowIndex) => (
                <TableRow hover key={rowIndex}>
                  {columns.map((col) => (
                    <TableCell key={col.key}>
                      {col.key === 'value' && onChange ? (
                        row.key === 'healthInsurance' && selectOptions?.healthInsurance ? (
                        <TextField
                          select
                          fullWidth
                          size="small"
                          variant="outlined"
                          value={row[col.key]}
                          onChange={(e) => onChange(rowIndex, col.key, e.target.value)}
                        >
                          {selectOptions.healthInsurance.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </TextField>
                        ) : (
                          <TextField
                            fullWidth
                            size="small"
                            variant="outlined"
                            value={row[col.key]}
                            onChange={(e) => onChange(rowIndex, col.key, e.target.value)}
                            aria-label={`Edit ${col.label} for row ${rowIndex}`}
                          />
                        )
                      ) : (
                        row[col.key]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>

        </TableContainer>
        <div className="flex justify-end px-4 py-4">
          <button
            //type="submit"
            onClick={onSubmit}
            className="w-[150px] px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700"
          >
            Guardar
          </button>
        </div>
      </Paper>
    </div>
  );
};

PatientUpdateTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
  })).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};
