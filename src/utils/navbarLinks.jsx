import { DashboardRounded, MasksRounded, MedicalServicesRounded, PeopleAltRounded } from "@mui/icons-material";

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
        Title: 'Doctores',
        Link: '',
        Icon: MasksRounded,
        hasSubLinks: true,
        Role: 'Admin',
        SubLinks: [
            {
                Title: 'Lista de doctores',
                Link: '/administrador/doctores',
            },
            {
                Title: 'Crear doctor',
                Link: '/administrador/doctores/crear',
            },
        ]
    },
];