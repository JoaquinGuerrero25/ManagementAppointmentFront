import { useMemo, useState } from "react";
import { Box, FormControl, IconButton, InputAdornment, Menu, MenuItem, OutlinedInput, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { MoreVertRounded, Search } from "@mui/icons-material";
import { useThemeMode } from "../../context/ThemeProvider";
import { GenericChip } from "../Chip/GenericChip";
import { ButtonTextControl } from "../Controls/Buttons/ButtonTextControl";

export const GenericTable = ({ title, columns, rows, filterKeys = [], actions, pagination = true, showViewAllButton = false, onViewAll = () => { } }) => {
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
            sx={{
                width: '100%',
                overflow: 'hidden',
                borderRadius: '16px',
                boxShadow: 'var(--customShadows-card)',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 'calc(3 * var(--spacing)) calc(3 * var(--spacing)) 0px;',
                    marginBottom: 'calc(3 * var(--spacing))',
                }}
            >
                {(title || filterKeys?.length > 0) && (
                    <Box>
                        {title && (
                            <Typography
                                component='h4'
                                fontWeight={600}
                                fontSize={'1.0625rem'}
                                lineHeight={'1.56'}
                                sx={{
                                    padding: '0px'
                                }}
                            >
                                {title}
                            </Typography>
                        )}
                        {filterKeys?.length > 0 && (
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
                        )}
                    </Box>
                )}
            </Box>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columns?.map((col, index) => (
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
                                    align="right"
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
                        {Array.isArray(filteredRows) && filteredRows
                            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            ?.map((row, index) => (
                                <TableRow hover key={index}>
                                    {columns?.map((col, colIndex) => (
                                        <TableCell key={colIndex}>
                                            {col.key === 'isAvailable' && (
                                                <GenericChip value={row[col.key]} />
                                            )}

                                            {row[col.key]}
                                        </TableCell>
                                    ))}
                                    {actions && (
                                        <TableCell align="right">
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
                                                            backgroundImage: 'none'
                                                        },
                                                    },
                                                    list: {
                                                        sx: {
                                                            padding: '6px'
                                                        }
                                                    }
                                                }}
                                            >
                                                {actions?.map((action, idx) => (
                                                    <MenuItem
                                                        key={idx}
                                                        onClick={() => {
                                                            action.Action(row);
                                                            handleMenuClose();
                                                        }}
                                                        sx={{ borderRadius: '6px' }}
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
            {pagination && (
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            )}
            {(showViewAllButton && !pagination) && (
                <Box>
                    <Box sx={{ p: '12px', display: 'flex', justifyContent: 'flex-end' }}>
                        <ButtonTextControl label="Ver todos" action={onViewAll} />
                    </Box>
                </Box>
            )}
        </Paper>
    );
};