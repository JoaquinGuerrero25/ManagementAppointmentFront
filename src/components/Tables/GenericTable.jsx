import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, useTheme } from "@mui/material";
import { useState } from "react";

export const GenericTable = ({ columns, rows }) => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Paper
            sx={{
                width: '95%',
                overflow: 'hidden',
                border: isDark ? '1px solid var(--grey-900)' : '1px solid var(--grey-300)',
                borderRadius: '8px',
            }}
        >
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columns.map((col, index) => (
                                <TableCell 
                                    sx={{ 
                                        fontWeight: '600', 
                                        letterSpacing: '0.5px', 
                                        backgroundColor: !isDark && 'var(--grey-100)'
                                    }} 
                                    key={index}
                                >
                                    {col.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow hover key={index}>
                                {columns.map((col, colIndex) => (
                                    <TableCell key={colIndex}>{row[col.key]}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}