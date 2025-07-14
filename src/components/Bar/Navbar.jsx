import { useState } from "react";
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { NavigationLinks } from "./NavigationLinks";
import { Menu, SettingsRounded } from "@mui/icons-material";
import { useThemeMode } from "../../context/ThemeProvider";
import { ButtonThemeMode } from "../Controls/Buttons/ButtonThemeMode";
import { UserMenu } from "../UserMenu";
import logo from '../../assets/icons/logo.png';

export const Navbar = ({ children }) => {
    const { darkMode } = useThemeMode();

    const [mobileOpen, setMobileOpen] = useState(false);

    const container = typeof window !== "undefined" ? () => window.document.body : undefined;

    return (
        <Box
            sx={{
                display: { xs: 'block', md: 'flex' },
                justifyContent: 'end',
            }}
        >
            <AppBar position="fixed" sx={{ height: { xs: '64px', md: '72px' } }}>
                <Toolbar sx={{ width: '50px', display: { md: 'none' } }}>
                    <IconButton
                        aria-label="open bar"
                        edge="start"
                        onClick={() => setMobileOpen(true)}
                        sx={{ display: { md: 'none' } }}
                    >
                        <Menu />
                    </IconButton>
                </Toolbar>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'end',
                        gap: '8px',
                    }}
                >
                    <UserMenu />
                </Box>
            </AppBar>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
            >
                <Box sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                    <Box
                        sx={{
                            height: { xs: '64px', lg: '72px' },
                            display: "flex",
                            alignItems: 'center',
                            paddingLeft: 'calc(2 * var(--spacing))',
                            paddingY: '12px'
                        }}
                    >
                        <img src={logo} alt="Logo clinica UTN" style={{ height: '40px', width: '40px' }} />
                    </Box>
                    <NavigationLinks />
                    <ButtonThemeMode />
                </Box>
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', md: 'block' },
                    position: 'relative',
                    marginTop: '50px',
                    '& .MuiDrawer-paper': {
                        height: '100vh',
                        boxSizing: 'border-box',
                        background: darkMode ? 'var(--fondo-oscuro)' : '#FFFFFF',
                        width: '299px',
                        borderRight: '1px solid var(rgba(var(---grey-500) / 0.8), rgba(var(---grey-500) / 0.12))'
                    },
                }}
                open
            >
                <Box sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                    <Box
                        sx={{
                            height: { xs: '64px', lg: '72px' },
                            display: "flex",
                            alignItems: 'center',
                            paddingLeft: 'calc(2 * var(--spacing))',
                            paddingY: '12px'
                        }}
                    >
                        <img src={logo} alt="Logo clinica UTN" style={{ height: '40px', width: '40px' }} />
                    </Box>
                    <NavigationLinks />
                    <ButtonThemeMode />
                </Box>
            </Drawer>
            <Box
                sx={{
                    minHeight: '100vh',
                    width: { sm: `100%`, md: `calc(100% - 300px)` },
                    display: 'flex',
                    paddingTop: {xs: '72px', md: '80px'},
                    alignItems: 'start',
                    justifyContent: 'center',
                    paddingX: { xs: 'calc(2 * var(--spacing))', sm: 'calc(3 * var(--spacing))', lg: 'calc(5 * var(--spacing))' }
                }}
            >
                {children}
            </Box>
        </Box>
    );
};