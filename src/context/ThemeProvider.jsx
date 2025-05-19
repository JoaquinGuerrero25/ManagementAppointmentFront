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
                MuiListItemButton: {
                    styleOverrides: {
                        root: {
                            borderRadius: "12px",
                            height: "40px",
                            '&.Mui-selected': {
                                backgroundColor: mode === 'light' ? 'var(--fondo-selected-claro)' : 'var(--fondo-selected-oscuro)',
                                color: mode === 'light' ? '#000' : '#fff',
                            },
                            '&.Mui-selected:hover': {
                                backgroundColor: mode === 'light'
                                    ? 'rgba(0, 0, 0, 0.04)'
                                    : 'rgba(255, 255, 255, 0.18)',
                            },
                        },
                    },
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