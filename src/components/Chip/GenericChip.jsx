import { CheckCircleOutlineRounded, HighlightOffRounded, WarningAmberRounded } from "@mui/icons-material";
import { Chip } from "@mui/material";

export const GenericChip = ({ value }) => {
    const normalized = String(value).toLowerCase();

    const statusMap = {
        confirmed: { label: 'Confirmado', color: 'success', icon: <CheckCircleOutlineRounded fontSize="small" /> },
        canceled: { label: 'Cancelado', color: 'error', icon: <HighlightOffRounded fontSize="small" /> },
        pending: { label: 'Pendiente', color: 'warning', icon: <WarningAmberRounded fontSize="small" /> },
    };

    if (statusMap[normalized]) {
        const { label, color, icon } = statusMap[normalized];
        return (
            <Chip
                label={label}
                icon={icon}
                color={color}
                size="small"
            />
        );
    }

    const isTrue =
        normalized === 'true' ||
        normalized === '1' ||
        normalized === 'activo' ||
        normalized === 'available' ||
        normalized === 'habilitado' ||
        normalized === 'sí';

    const isFalse =
        normalized === 'false' ||
        normalized === '0' ||
        normalized === 'inactivo' ||
        normalized === 'no disponible' ||
        normalized === 'no' ||
        normalized === 'deshabilitado';

    const label = isTrue
        ? 'Habilitado'
        : isFalse
            ? 'Deshabilitado'
            : value;

    const color = isTrue
        ? 'success'
        : isFalse
            ? 'default'
            : 'warning';

    const icon = isTrue
        ? <CheckCircleOutlineRounded fontSize="small" />
        : isFalse
            ? <HighlightOffRounded fontSize="small" />
            : <WarningAmberRounded fontSize="small" />;

    return (
        <Chip
            label={label}
            icon={icon}
            color={color}
            size="small"
        />
    );
};