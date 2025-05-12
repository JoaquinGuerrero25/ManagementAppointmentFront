import { Emergency, KeyboardArrowDownRounded, KeyboardArrowRightRounded } from "@mui/icons-material";
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { linksNavbar } from "../../utils/navbarLinks";
import { useNavigate, useLocation } from "react-router-dom";
import { useThemeMode } from "../../context/ThemeProvider";

export const NavigationLinks = () => {
    const { darkMode } = useThemeMode();
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const [openNavLink, setOpenNavLink] = useState(null);

    useEffect(() => {
        const openParent = linksNavbar.find((nav) =>
            nav.hasSubLinks && nav.SubLinks.some((s) => s.Link === currentPath)
        );
        if (openParent) {
            setOpenNavLink(openParent.Title);
        }
    }, [currentPath]);

    return (
        <Box sx={{ width: "100%" }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    padding: "0px 16px",
                    gap: 2,
                    height: "64px",
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

            <List
                sx={{
                    padding: "0px 12px",
                    paddingTop: "20px",
                    gap: "4px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {linksNavbar.map((nav) => {
                    const isSubLinkActive = nav.hasSubLinks && nav.SubLinks.some((s) => s.Link === currentPath);
                    const isActive = nav.Link === currentPath;
                    const isOpen = openNavLink === nav.Title || isSubLinkActive;

                    const handleToggle = () => {
                        setOpenNavLink(isOpen ? null : nav.Title);
                    };

                    return (
                        <div key={nav.Title}>
                            {!nav.hasSubLinks ? (
                                <ListItemButton
                                    onClick={() => navigate(nav.Link)}
                                    sx={{
                                        borderRadius: "12px",
                                        backgroundColor: isActive ? "var(--primary-800)" : "transparent",
                                        "&:hover": {
                                            backgroundColor: isActive && "var(--primary-dark)"
                                        },
                                    }}
                                >
                                    <ListItemIcon>
                                        <nav.Icon sx={{ fontSize: "24px", color: isActive && 'white' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        sx={{
                                            fontSize: "20px",
                                            color: darkMode ? "var(--grey-300)" : "var(--grey-900)",
                                            color: isActive && 'white',
                                        }}
                                        primary={nav.Title}
                                    />
                                </ListItemButton>
                            ) : (
                                <Box>
                                    <ListItemButton
                                        onClick={handleToggle}
                                        sx={{
                                            borderRadius: "12px",
                                        }}
                                    >
                                        <ListItemIcon>
                                            <nav.Icon sx={{ fontSize: "24px" }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            sx={{
                                                fontSize: "20px",
                                                color: darkMode ? "var(--grey-300)" : "var(--grey-900)",
                                            }}
                                            primary={nav.Title}
                                        />
                                        {isOpen ? (
                                            <KeyboardArrowDownRounded />
                                        ) : (
                                            <KeyboardArrowRightRounded />
                                        )}
                                    </ListItemButton>
                                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                                        <List
                                            component="div"
                                            disablePadding
                                            sx={{
                                                pl: 2,
                                                ml: 2,
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "start",
                                                alignItems: "end",
                                            }}
                                        >
                                            {nav.SubLinks.map((subLink) => {
                                                const isSubActive = subLink.Link === currentPath;
                                                return (
                                                    <Box
                                                        width="94%"
                                                        sx={{ borderLeft: "0.4px solid" }}
                                                        key={subLink.Title}
                                                    >
                                                        <ListItemButton
                                                            sx={{
                                                                borderRadius: "12px",
                                                                mt: '4px',
                                                                ml: '8px',
                                                                backgroundColor: isSubActive
                                                                    ? "var(--primary-800)"
                                                                    : "transparent",
                                                                "&:hover": {
                                                                    backgroundColor: isSubActive && "var(--primary-dark)"
                                                                },
                                                            }}
                                                            onClick={() => navigate(subLink.Link)}
                                                        >
                                                            <ListItemText
                                                                secondary={subLink.Title}
                                                                slotProps={{
                                                                    secondary: {
                                                                        sx: { fontSize: "14px", pl: 4, color: isSubActive && 'white', fontWeight: isSubActive && '500' },
                                                                    },
                                                                }}
                                                            />
                                                        </ListItemButton>
                                                    </Box>
                                                );
                                            })}
                                        </List>
                                    </Collapse>
                                </Box>
                            )}
                        </div>
                    );
                })}
            </List>
        </Box>
    );
};