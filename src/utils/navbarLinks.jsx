import { DashboardRounded, MedicalServicesRounded, PeopleAltRounded } from "@mui/icons-material";

export const linksNavbar = [
    {
        Title: 'Dashboard',
        Link: '/',
        Icon: DashboardRounded,
        hasSubLinks: false,
        Role: 'Admin'
    },
    {
        Title: 'Especialidades',
        Link: '',
        Icon: MedicalServicesRounded,
        hasSubLinks: true,
        Role: 'Admin',
        SubLinks: [
            {
                Title: 'Lista de especialidades',
                Link: '/administrador/especialidades',
            },
            {
                Title: 'Crear especialidad',
                Link: '/administrador/especialidades/crear',
            },
        ]
    },
    {
        Title: 'Pacientes',
        Link: '',
        Icon: PeopleAltRounded,
        hasSubLinks: true,
        Role: 'Doctor',
        SubLinks: [
            {
                Title: 'Lista de pacientes',
                Link: '/doctor/pacientes',
            },
        ]
    },
];