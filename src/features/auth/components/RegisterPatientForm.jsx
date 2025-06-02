import { useEffect, useState } from "react";
import { buildPlainObjectFromFields } from "../../../utils/formUtils";
import { patientCreateFields } from "../../../constants/patientConstant";
import { GenericForm } from "../../../components/Forms/GenericForm";
import { ButtonGenericControl } from "../../../components/Controls/Buttons/ButtonGenericControl";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { add_patient } from "../../patient/patientService";

export const RegisterPatientForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({});

    useEffect(() => {
        const inital = buildPlainObjectFromFields(patientCreateFields);
        setFormData(inital);
    }, []);

    const handleChange = (name, value) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await add_patient(formData);
        navigate('/iniciar-sesion');
    };

    return (
        <Box width='100%' display={"flex"} flexDirection={'column'} gap={'12px'}>
            <GenericForm
                fields={patientCreateFields}
                value={formData}
                onChange={handleChange}
            />
            <ButtonGenericControl
                label={'Registrarme'}
                action={handleSubmit}
            />
        </Box>
    );
};