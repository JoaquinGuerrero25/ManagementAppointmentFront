import { Box } from "@mui/material";
import { EditRounded } from "@mui/icons-material";
import { SectionHeader } from "../../../components/SectionHeader";
import { MainLayout } from "../../../layouts/MainLayout";
import { ProfilePhotoCard } from "../components/ProfilePhotoCard";
import { ProfileInfoCard } from "../components/ProfileInfoCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { get_doctor_by_id } from "../../doctors/doctorService";
import { get_admin_by_id } from "../../../api/services/adminService";
import { get_patient_by_id } from "../../patient/patientService";
import { adminModel } from "../../../constants/AdminConstant";
import { doctorModel } from "../../../constants/doctorConstant";
import { patientModel } from "../../../constants/patientConstant";
import { DoctorForm } from "../../doctors/components/DoctorForm";
import { PatientForm } from "../../patient/components/PatientForm";
import { AdminForm } from "../components/AdminForm";

export const ProfilePage = () => {
    const user = useSelector((state) => state.auth.user);

    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [dataUser, setDataUser] = useState(null);
    const [model, setModel] = useState(null);

    const handleDataUser = async () => {
        let data = {};
        if (user.role === 'Admin') {
            data = await get_admin_by_id(user.id);
            setModel(adminModel);
        } else if (user.role === 'Doctor') {
            data = await get_doctor_by_id(user.id);
            setModel(doctorModel);
        } else if (user.role === 'Patient') {
            data = await get_patient_by_id(user.id);
            setModel(patientModel);
        }

        setDataUser(data);
    };

    useEffect(() => {
        handleDataUser();
    }, []);

    const handleCloseDialog = () => {
        setOpenEditDialog(false);
    };

    const handleSubmit = () => {
        handleDataUser();
        handleCloseDialog();
    };

    return (
        <MainLayout>
            <SectionHeader
                title="Mi Perfil"
                description="Gestiona tu información personal."
                buttonLabel="Editar Perfil"
                onButtonClick={() => setOpenEditDialog(true)}
                iconButton={<EditRounded fontSize="large" />}
            >
                <Box
                    width="100%"
                    display="flex"
                    gap="24px"
                    paddingBottom={'24px'}
                    sx={{
                        flexDirection: { xs: 'column', lg: 'row' },
                        alignItems: 'stretch',
                    }}
                >
                    <Box sx={{ width: { xs: '100%', lg: '30%' }, minHeight: '100%' }}>
                        <ProfilePhotoCard sx={{ height: '100%' }} />
                    </Box>

                    <Box sx={{ width: { xs: '100%', lg: '70%' }, minHeight: '100%' }}>
                        <ProfileInfoCard
                            sx={{ height: '100%' }}
                            model={model}
                            value={dataUser}
                        />
                    </Box>
                </Box>
            </SectionHeader>
            {user.role === 'Admin' && (
                <AdminForm 
                    open={openEditDialog}
                    admin={dataUser}
                    onSubmit={handleSubmit}
                    onClose={handleCloseDialog}
                />
            )}

            {user.role === 'Doctor' && (
                <DoctorForm
                    open={openEditDialog}
                    doctor={dataUser}
                    onSubmit={handleSubmit}
                    onClose={handleCloseDialog}
                />
            )}

            {user.role === 'Patient' && (
                <PatientForm
                    open={openEditDialog}
                    patient={dataUser}
                    onSubmit={handleSubmit}
                    onClose={handleCloseDialog}
                />
            )}
        </MainLayout>
    );
};