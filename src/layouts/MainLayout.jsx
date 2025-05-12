import { Navbar } from "../components/Bar/Navbar";

export const MainLayout = ({ children }) => {
    return (
        <Navbar>
            {children}
        </Navbar>
    );
};