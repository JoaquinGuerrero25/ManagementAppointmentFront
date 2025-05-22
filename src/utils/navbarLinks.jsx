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
        Link: '',
        Icon: PeopleAltRounded,
        hasSubLinks: true,
        Role: 'Doctor',
        SubLinks: [
            {
                Title: 'Lista de doctores',
                Link: '/doctor/pacientes',
            },
        ]
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
];