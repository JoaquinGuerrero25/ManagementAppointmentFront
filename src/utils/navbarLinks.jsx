import { DashboardRounded, HealthAndSafetyRounded, MonitorHeartRounded, PeopleAltRounded, MasksRounded } from "@mui/icons-material";

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

    {
        Title: 'Mi Perfil',
        Link: '/doctor/perfil',
        Icon: MasksRounded,
        hasSubLinks: false,
        Role: 'Doctor',
    },

    {
        Title: 'Solicitar turno',
        Link: '/paciente/solicitar-turno',
        Icon: MasksRounded,
        hasSubLinks: false,
        Role: 'Patient',
    },
];