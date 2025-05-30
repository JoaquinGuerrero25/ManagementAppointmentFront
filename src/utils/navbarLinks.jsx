import { DashboardRounded, HealthAndSafetyRounded, MonitorHeartRounded, PeopleAltRounded } from "@mui/icons-material";

export const linksNavbar = [
    {
        Title: 'Panel de control',
        Link: '/',
        Icon: DashboardRounded,
        hasSubLinks: false,
        Role: 'Admin'
    },
    {
        Title: 'Pacientes',
        Link: '/administrador/pacientes',
        Icon: PeopleAltRounded,
        hasSubLinks: false,
        Role: 'Admin',
    },
    {
        Title: 'Doctores',
        Link: '/administrador/doctores',
        Icon: HealthAndSafetyRounded,
        hasSubLinks: false,
        Role: 'Admin',
    },
    {
        Title: 'Especialidades',
        Link: '/administrador/especialidades',
        Icon: MonitorHeartRounded,
        hasSubLinks: false,
        Role: 'Admin',
    },
    {
        Title: 'Login',
        Link: '/iniciar-sesion',
        Icon: MonitorHeartRounded,
        hasSubLinks: false,
        Role: 'Admin',
    },
];