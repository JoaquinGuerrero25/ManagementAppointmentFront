import { DashboardRounded, HealthAndSafetyRounded, MonitorHeartRounded, PeopleAltRounded, MasksRounded, AssignmentIndRounded } from "@mui/icons-material";

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
    {
        Title: 'Solicitar turno',
        Link: '/paciente/solicitar-turno',
        Icon: MasksRounded,
        hasSubLinks: false,
        Role: ['Patient'],
    },
    {
        Title: 'Historial médico',
        Link: '/paciente/historial-medico',
        Icon: AssignmentIndRounded,
        hasSubLinks: false,
        Role: ['Patient'],
    },
];