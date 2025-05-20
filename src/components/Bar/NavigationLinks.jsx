import { KeyboardArrowDownRounded, KeyboardArrowRightRounded } from "@mui/icons-material";
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography, typographyClasses } from "@mui/material";
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
                                    selected={isActive}
                                    onClick={() => navigate(nav.Link)}
                                    sx={{
                                        borderRadius: "10px",
                                        height: '40px',
                                    }}
                                >
                                    <ListItemIcon>
                                        <nav.Icon sx={{ fontSize: "24px" }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        sx={{
                                            fontSize: "20px",
                                        }}
                                        primary={nav.Title}
                                        slotProps={{
                                            primary: {
                                                fontWeight: isActive && '600',
                                                letterSpacing: isActive && '0.3px',
                                            }
                                        }}
                                    />
                                </ListItemButton>
                            ) : (
                                <Box>
                                    <ListItemButton
                                        onClick={handleToggle}
                                        sx={{
                                            height: '40px',
                                            borderRadius: "10px",
                                        }}
                                    >
                                        <ListItemIcon>
                                            <nav.Icon sx={{ fontSize: "24px" }} />
                                        </ListItemIcon>
                                        <ListItemText sx={{ fontSize: "20px" }} primary={nav.Title} />
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
                                                        width="99%"
                                                        sx={{ borderLeft: "0.4px solid" }}
                                                        key={subLink.Title}
                                                    >
                                                        <ListItemButton
                                                            selected={isSubActive}
                                                            sx={{
                                                                borderRadius: "10px",
                                                                mt: '4px',
                                                                ml: '8px',
                                                                height: '40px',
                                                            }}
                                                            onClick={() => navigate(subLink.Link)}
                                                        >
                                                            <ListItemText
                                                                secondary={subLink.Title}
                                                                slotProps={{
                                                                    secondary: {
                                                                        sx: {
                                                                            fontSize: "14px",
                                                                            pl: 4,
                                                                            fontWeight: isSubActive && '00',
                                                                            color: isSubActive && (darkMode ? 'white' : 'black'),
                                                                            letterSpacing: isSubActive && '0.3px'
                                                                        },
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