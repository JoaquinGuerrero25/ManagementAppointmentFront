import { patientCreateRequest } from "../constants/patientFields";
import { GenericForm } from "../components/Forms/GenericForm";

export const Register = () => {
    return (
        <div>
            <GenericForm fields={patientCreateRequest} />
        </div>
    );
}