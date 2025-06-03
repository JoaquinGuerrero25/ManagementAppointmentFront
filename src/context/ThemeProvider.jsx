import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const ThemeModeContext = createContext();

export const useThemeMode = () => useContext(ThemeModeContext);

export const ThemeModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true';
    });

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode.toString());
    }, [darkMode]);

    const toggleMode = () => setDarkMode(prev => !prev);

    const theme = useMemo(() => {
        const mode = darkMode ? 'dark' : 'light';

        return createTheme({
            palette: {
                mode,
                background: {
                    default: mode === 'light' ? 'var(--fondo-claro)' : 'var(--fondo-oscuro)',
                    paper: mode === 'light' ? '#ffffff' : 'var(--fondo-paper-oscuro)',
                },
            },
            typography: {
                fontFamily: [
                    'Inter',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Helvetica',
                    'Arial',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                ].join(','),
            },
            components: {
                MuiPaper: {
                    styleOverrides: {
                        root: {
                            backgroundImage: 'none'
                        }
                    }
                },
                MuiDrawer: {
                    styleOverrides: {
                        root: {
                            '& .MuiDrawer-paper': {
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                backgroundImage: ' url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSJ1cmwoI3BhaW50MF9yYWRpYWxfNDQ2NF81NTMzOCkiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CjxkZWZzPgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MF9yYWRpYWxfNDQ2NF81NTMzOCIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAgMS44MTgxMmUtMDUpIHJvdGF0ZSgtNDUpIHNjYWxlKDEyMy4yNSkiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBCOEQ5Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwQjhEOSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="), url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSJ1cmwoI3BhaW50MF9yYWRpYWxfNDQ2NF81NTMzNykiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CjxkZWZzPgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MF9yYWRpYWxfNDQ2NF81NTMzNyIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEyMCkgcm90YXRlKDEzNSkgc2NhbGUoMTIzLjI1KSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRjU2MzAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY1NjMwIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9yYWRpYWxHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K")',
                                backgroundSize: '50%, 50%',
                                backgroundRepeat: 'no-repeat',
                                backdropFilter: 'blur(50%)',
                                backgroundColor: mode === 'light' ? 'var(--layout-nav-bg-ligth)' : 'var(--layout-nav-bg)',
                                outline: '0px',
                                backgroundPosition: 'right top, left bottom',
                                overflow: 'unset',
                                width: '80%',
                                maxWidth: '300px'
                            }
                        },
                    },
                },
                MuiAppBar: {
                    styleOverrides: {
                        root: {
                            backgroundColor: 'transparent',
                            backdropFilter: 'blur(16px)',
                            WebkitBackdropFilter: 'blur(16px)',
                            backgroundImage: 'none',
                            boxShadow: 'none',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 'calc(2 * var(--spacing))',
                            paddingRight: 'calc(2 * var(--spacing))',
                        },
                    },
                },
                MuiList: {
                    styleOverrides: {
                        root: {
                            flex: '1 1 auto',
                            paddingLeft: 'calc(2 * var(--spacing))',
                            paddingRight: 'calc(2 * var(--spacing))',
                        }
                    }
                },
                MuiListItemIcon: {
                    styleOverrides: {
                        root: {
                            minWidth: '40px',
                            fontSize: '24px',
                            color: 'inherit',
                        }
                    }
                },
                MuiListItemButton: {
                    styleOverrides: {
                        root: {
                            display: 'inline-flex',
                            WebkitBoxAlign: 'center',
                            alignItems: 'center',
                            WebkitBoxPack: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            boxSizing: 'border-box',
                            WebkitTapHighlightColor: 'transparent',
                            outline: '0px',
                            border: '0px',
                            margin: '0px',
                            cursor: 'pointer',
                            userSelect: 'none',
                            verticalAlign: 'center',
                            appearance: 'none',
                            textDecoration: 'none',
                            width: '100%',
                            paddingTop: 'var(--nav-item-pt)',
                            paddingLeft: 'var(--nav-item-pl)',
                            paddingRight: 'var(--nav-item-pr)',
                            paddingBottom: 'var(--nav-item-pb)',
                            borderRadius: 'var(--nav-item-radius)',
                            fontWeight: '500',
                            color: mode === 'light' ? 'var(--palette-text-secondary-light)' : 'var(--nav-item-color)',
                            minHeight: 'var(--nav-item-root-height)',
                            '& .MuiTypography-root': {
                                display: '-webkit-box',
                                textOverflow: 'ellipsis',
                                WebkitLineClamp: '1',
                                WebkitBoxOrient: 'vertical',
                                fontSize: '0.875rem',
                                lineHeight: '1.57',
                                fontWeight: '600'
                            },
                            '&.Mui-selected': {
                                backgroundColor: 'var(--nav-item-root-active-bg)',
                                color: mode === 'light' ? 'var(--palette-primary-main)' : 'var(--nav-item-root-active-color-on-dark)',
                            },
                            '&.Mui-selected:hover': {
                                backgroundColor: 'var(--nav-item-root-active-hover-bg)'
                            },
                        },
                    },
                },
                MuiButton: {
                    styleOverrides: {
                        root: {
                            background: mode === 'light' ? 'var(--palette-grey-800)' : 'var(--palette-common-white)',
                            color: mode === 'light' ? 'var(--palette-common-white)' : 'var(--palette-grey-800)',
                            fontWeight: '800',
                            fontSize: '0.875rem',
                            lineHeight: '1.71',
                            boxShadow: 'none',
                            borderRadius: 'var(--shape-borderRadius)',
                        }
                    }
                },
            },
        });
    }, [darkMode]);

    return (
        <ThemeModeContext.Provider value={{ darkMode, toggleMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    );
};