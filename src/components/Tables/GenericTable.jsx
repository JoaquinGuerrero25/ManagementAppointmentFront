import { useMemo, useState } from "react";
import { Box, FormControl, IconButton, InputAdornment, Menu, MenuItem, OutlinedInput, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { MoreVertRounded, Search } from "@mui/icons-material";
import { useThemeMode } from "../../context/ThemeProvider";
import { GenericChip } from "../Chip/GenericChip";

export const GenericTable = ({ columns, rows, filterKeys = [], actions }) => {
    const { darkMode } = useThemeMode();
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuRow, setMenuRow] = useState(null);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const filteredRows = useMemo(() => {
        if (!search) return rows;

        const lowerSearch = search.toLowerCase();

        return rows.filter(row =>
            filterKeys.some(key => {
                const value = row[key];
                return value?.toString().toLowerCase().includes(lowerSearch);
            })
        );
    }, [rows, filterKeys, search]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleMenuOpen = (event, row) => {
        setAnchorEl(event.currentTarget);
        setMenuRow(row);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMenuRow(null);
    };

    return (
        <Paper
            // variant="outlined"
            elevation={2}
            sx={{
                width: '100%',
                overflow: 'hidden',
                border: darkMode ? '1px solid var(--grey-900)' : '1px solid var(--grey-300)',
                borderRadius: '12px',
                backgroundImage: 'none',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'end',
                }}
            >
                {filterKeys?.length > 0 && (
                    <Box sx={{ padding: 2 }}>
                        <FormControl fullWidth>
                            <OutlinedInput
                                name="search"
                                type="text"
                                margin="dense"
                                placeholder="Buscar"
                                value={search}
                                size="small"
                                onChange={(e) => setSearch(e.target.value)}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>
                                }
                                sx={{
                                    borderRadius: '12px',
                                }}
                            />
                        </FormControl>
                    </Box>
                )}
            </Box>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columns.map((col, index) => (
                                <TableCell
                                    sx={{
                                        fontWeight: '600',
                                        letterSpacing: '0.5px',
                                        backgroundColor: !darkMode && 'var(--grey-100)'
                                    }}
                                    key={index}
                                >
                                    {col.label}
                                </TableCell>
                            ))}
                            {actions && (
                                <TableCell
                                    sx={{
                                        fontWeight: '600',
                                        letterSpacing: '0.5px',
                                        backgroundColor: !darkMode && 'var(--grey-100)'
                                    }}
                                >
                                    Acciones
                                </TableCell>

                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredRows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <TableRow hover key={index}>
                                    {columns.map((col, colIndex) => (
                                        <TableCell key={colIndex}>
                                            {col.key === 'isAvailable' && (
                                                <GenericChip value={row[col.key]} />
                                            )}

                                            {row[col.key]}
                                        </TableCell>
                                    ))}
                                    {actions && (
                                        <TableCell>
                                            <IconButton onClick={(e) => handleMenuOpen(e, row)}>
                                                <MoreVertRounded />
                                            </IconButton>
                                            <Menu
                                                anchorEl={anchorEl}
                                                open={Boolean(anchorEl) && menuRow === row}
                                                onClose={handleMenuClose}
                                                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                                slotProps={{
                                                    paper: {
                                                        sx: {
                                                            borderRadius: '8px',
                                                        },
                                                    },
                                                    list: {
                                                        sx: {
                                                            paddingTop: 0,
                                                            paddingBottom: 0,
                                                        },
                                                    },
                                                }}
                                            >
                                                {actions.map((action, idx) => (
                                                    <MenuItem
                                                        key={idx}
                                                        onClick={() => {
                                                            action.Action(row);
                                                            handleMenuClose();
                                                        }}
                                                        sx={{
                                                            minWidth: '140px',
                                                            textAlign: 'start',
                                                            margin: 1, 
                                                            borderRadius: 2,
                                                        }}
                                                    >
                                                        {action.Icon && (
                                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                                                                <action.Icon fontSize="small" />
                                                            </Box>
                                                        )}
                                                        <Typography
                                                            component='p'
                                                            sx={{
                                                                width: '100%',
                                                                ml: '12px'
                                                            }}
                                                        >
                                                            {action.Label}
                                                        </Typography>
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </TableCell>
                                    )}
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
};