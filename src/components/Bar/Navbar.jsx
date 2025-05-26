import { useState } from "react";
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { NavigationLinks } from "./NavigationLinks";
import { Emergency, Menu } from "@mui/icons-material";
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
                    width: '100%',
                    backgroundImage: 'none',
                    background: 'none',
                    boxShadow: 'none',
                    height: '50px',
                    backgroundColor: darkMode ? '#161b22' : 'white',
                    borderBottom: darkMode ? '1px solid var(--grey-900)' : '1px solid var(--grey-300)',
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    justifyContent: 'start'
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        padding: "0px 16px",
                        gap: 2,
                        height: "50px",
                        width: 'auto',
                        color: darkMode ? 'white' : 'black'
                    }}
                >
                    <Emergency sx={{ fontSize: "36px" }} />
                    <Typography
                        component="h3"
                        sx={{ fontWeight: "500", letterSpacing: "0.5px", fontSize: "24px" }}
                    >
                        Clinica UTN
                    </Typography>
                </Box>
                <Toolbar sx={{ width: '50px', display: { md: 'none' } }}>
                    <IconButton
                        color="inherit"
                        aria-label="open bar"
                        edge="start"
                        onClick={() => setMobileOpen(true)}
                        sx={{ mr: 2, display: { md: 'none' } }}
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
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '320px' },
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
                    position: 'relative',
                    marginTop: '50px',
                    '& .MuiDrawer-paper': {
                        height: 'calc(100vh - 50px)',
                        boxSizing: 'border-box',
                        width: '260px',
                        marginTop: '50px',
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
                    width: { sm: `100%`, md: `calc(100% - 260px)` },
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