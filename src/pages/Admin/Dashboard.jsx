import { MedicalServices, Person } from "@mui/icons-material";
import { DataGenericControl } from "../../components/Controls/Data/DataGenericControl";
import { MainLayout } from "../../layouts/MainLayout";

export const Dashboard = () => {
    return (
        <MainLayout>
            <DataGenericControl 
                icon={<MedicalServices fontSize="20px" />} 
                label="Doctores activos" 
                data='20' 
                width="600px" 
                labelButton="Ver doctores" 
                actionButton={() => { }}
            />
            <DataGenericControl icon={<Person fontSize="20px" />} label="Pacientes activos" data='1220' width="600px" labelButton="Ver pacientes" actionButton={() => { }} />
        </MainLayout>
    );
}