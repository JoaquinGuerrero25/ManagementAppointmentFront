import { MainLayout } from "../../layouts/MainLayout";
import { DataGenericControl } from "../../components/Controls/Data/DataGenericControl";
import { Home } from "@mui/icons-material";

export const DashboardAdmin = () => {
    return (
        <MainLayout>
            <DataGenericControl 
                icon={<Home />}
            />
        </MainLayout>
    );
};
