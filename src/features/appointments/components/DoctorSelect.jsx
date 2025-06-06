import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { get_doctors } from "../../doctors/doctorService";

export const DoctorSelect = ({ value, onChange }) => {
    const [doctors, setDoctors] = useState([]);

    const handleDoctos = async () => {
        const data = await get_doctors();
        setDoctors(data);
    };

    useEffect(() => {
        handleDoctos();
    }, []);

    return (
        <FormControl fullWidth size="small">
            <InputLabel id="doctor-select-label">Doctor</InputLabel>
            <Select
                labelId="doctor-select-label"
                value={value}
                label="Doctor"
                onChange={onChange}
                sx={{
                    borderRadius: '8px',
                }}
            >
                {doctors?.length === 0 ? (
                    <MenuItem disabled value="">
                        No hay doctores disponibles
                    </MenuItem>
                ) : (
                    doctors?.map((doctor) => (
                        <MenuItem key={doctor.id} value={doctor.id} sx={{ borderRadius: '8px' }}>
                            {doctor.name}
                        </MenuItem>
                    ))
                )}
            </Select>
        </FormControl>
    );
};