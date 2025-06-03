import { DashboardRounded, HealthAndSafetyRounded, MonitorHeartRounded, PeopleAltRounded } from "@mui/icons-material";

export const linksNavbar = [
    // Links generales
    {
        Title: 'Panel de control',
        Link: '/',
        Icon: DashboardRounded,
        hasSubLinks: false,
        Role: ['All']
    },
    // Links administrador
    // {
    //     Title: 'Panel de control',
    //     Link: '/',
    //     Icon: DashboardRounded,
    //     hasSubLinks: false,
    //     Role: ['Admin']
    // },
    {
        Title: 'Pacientes',
        Link: '/administrador/pacientes',
        Icon: PeopleAltRounded,
        hasSubLinks: false,
        Role: ['Admin'],
    },
    {
        Title: 'Doctores',
        Link: '/administrador/doctores',
        Icon: HealthAndSafetyRounded,
        hasSubLinks: false,
        Role: ['Admin'],
    },
    {
        Title: 'Especialidades',
        Link: '/administrador/especialidades',
        Icon: MonitorHeartRounded,
        hasSubLinks: false,
        Role: ['Admin'],
    },
    // Links Pacientes
    // {
    //     Title: 'Panel de control',
    //     Link: '/',
    //     Icon: DashboardRounded,
    //     hasSubLinks: false,
    //     Role: ['Patient']
    // },
    // Links doctores
    // {
    //     Title: 'Panel de control',
    //     Link: '/',
    //     Icon: DashboardRounded,
    //     hasSubLinks: false,
    //     Role: ['Doctor']
    // },
];