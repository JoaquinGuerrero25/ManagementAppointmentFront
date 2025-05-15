import { Box, Button, Typography } from "@mui/material";
import { MainLayout } from "../../layouts/MainLayout";

export const Patient = () => {
    return (
        <MainLayout>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    border: '1px solid red',
                    justifyContent: 'space-between',
                    padding: '0px 5rem'
                }}
            >
                <Box>
                    <Typography>Pacientes</Typography>
                </Box>
                <Button variant="contained">
                    hola
                </Button>
            </Box>
        </MainLayout>
    );
};