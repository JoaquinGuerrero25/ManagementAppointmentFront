import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar, Alert } from '@mui/material';
import { clearError } from '../redux/slices/errorSlice';

const ErrorSnackbar = () => {
    const dispatch = useDispatch();
    const { message, type } = useSelector(state => state.error);

    const handleClose = (_, reason) => {
        if (reason === 'clickaway') return;
        dispatch(clearError());
    };

    return (
        <Snackbar 
            open={!!message}
            autoHideDuration={5000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert onClose={handleClose} severity={type || 'error'} sx={{ width: '100%', borderRadius: '8px', boxShadow: 3 }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default ErrorSnackbar;