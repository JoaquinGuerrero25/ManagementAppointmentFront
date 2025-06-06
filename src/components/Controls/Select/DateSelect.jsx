import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { es } from "date-fns/locale";

export const DateSelect = ({ value, onChange, minDate = new Date() }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
            <DatePicker
                label="Fecha"
                value={value}
                onChange={onChange}
                minDate={minDate}
                disablePast
                slotProps={{
                    
                    textField: {
                        fullWidth: true,
                        size: 'small',
                        sx: {
                            '& .MuiPickersInputBase-root': {
                                '& fieldset': {
                                    borderRadius: '8px',
                                },
                            },
                        },
                    }
                }}
            />
        </LocalizationProvider>
    );
};