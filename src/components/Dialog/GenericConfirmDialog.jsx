import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Typography } from "@mui/material"
import { ButtonTextControl } from "../Controls/Buttons/ButtonTextControl"
import { ButtonGenericControl } from "../Controls/Buttons/ButtonGenericControl"

export const GenericConfirmDialog = ({ open, title = 'Confirmar', message = 'Estas seguro?', onClose, onConfirm, confirmLabel = 'Confirmar' }) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth
            slotProps={{
                paper: {
                    sx: {
                        borderRadius: '12px',
                        backgroundImage: 'none',
                        padding: '6px',
                    }
                }
            }}
        >
            <DialogTitle sx={{ fontWeight: '500', letterSpacing: '0.4px' }}>
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <ButtonTextControl label='Cancelar' action={onClose} />
                <ButtonGenericControl label={confirmLabel} action={onConfirm} />
            </DialogActions>
        </Dialog>
    )
}