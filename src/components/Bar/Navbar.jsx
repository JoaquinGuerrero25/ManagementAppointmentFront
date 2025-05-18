import { useState } from "react";
import { AppBar, Box, Drawer, IconButton, Toolbar } from "@mui/material";
import { NavigationLinks } from "./NavigationLinks";
import { Menu } from "@mui/icons-material";
import { useThemeMode } from "../../context/ThemeProvider";
import { ButtonThemeMode } from "../Controls/Buttons/ButtonThemeMode";

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
            <AppBar
                position="fixed"
                sx={{
                    width: { md: `calc(100% - 300px)` },
                    ml: { sm: `320px` },
                    backgroundImage: 'none',
                    background: 'none',
                    boxShadow: 'none',
                    height: '50px',
                    borderBottom: darkMode ? '1px solid var(--grey-900)' : '1px solid var(--grey-300)',
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open bar"
                        edge="start"
                        onClick={() => setMobileOpen(true)}
                        sx={{ mr: 2, display: { sm: 'none' }, color: darkMode ? 'white' : 'black' }}
                    >
                        <Menu />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '320px', background: 'var(--color-menu-primary)' },
                }}
            >
                <Box sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                    <NavigationLinks />
                    <ButtonThemeMode />
                </Box>
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', md: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: '300px',
                        background: 'none',
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
                    <NavigationLinks />
                    <ButtonThemeMode />
                </Box>
            </Drawer>
            <Box
                sx={{
                    minHeight: '100vh',
                    width: { sm: `100%`, md: `calc(100% - 300px)` },
                    display: 'flex',
                    paddingTop: '82px',
                    alignItems: 'start',
                    justifyContent: 'center',
                    paddingX: 2,
                }}
            >
                {children}
            </Box>
        </Box>
    );
};