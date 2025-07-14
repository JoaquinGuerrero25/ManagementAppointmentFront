import { Avatar, Divider, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { logoutUser } from "../features/auth/authThunks";
import { useNavigate } from "react-router-dom";

export const UserMenu = () => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleViewProfile = () => {
        navigate('/perfil');
    };

    const handleLogout = () => {
        logoutUser();
    };

    return (
        <>
            <IconButton onClick={handleOpen} size="small">
                <Avatar
                    sx={{
                        bgcolor: `hsl(${user?.email?.length * 42 % 360}, 70%, 50%)`,
                        color: '#fff'
                    }}
                >
                    {user?.email?.slice(0, 2).toUpperCase()}
                </Avatar>
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
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
                <MenuItem sx={{ borderRadius: '6px' }} onClick={handleViewProfile}>Perfil</MenuItem>
                <Divider />
                <MenuItem sx={{ borderRadius: '6px', width: '100%', color: 'red' }} onClick={handleLogout}>Cerrar sesión</MenuItem>
            </Menu>
        </>
    );
};