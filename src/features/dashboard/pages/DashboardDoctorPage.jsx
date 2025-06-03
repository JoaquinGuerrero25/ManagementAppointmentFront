import { Box } from "@mui/material";
import { MainLayout } from "../../../layouts/MainLayout";
import { WelcomeCard } from "../components/WelcomeCard";

export const DashboardDoctorPage = () => {
    return (
        <MainLayout>
            <Box
                width={'100%'}
                display='flex'
                flexDirection='column'
                paddingBottom={'calc(3 * var(--spacing))'}
                gap='calc(3 * var(--spacing))'
                sx={{
                    minHeight: {
                        xs: 'calc(100vh - 64px)',
                        lg: 'calc(100vh - 72px})'
                    }
                }}
            >
                <WelcomeCard />
                <Box>
                    
                </Box>
            </Box>
        </MainLayout>
    );
}