import { Box, Card, Typography } from "@mui/material";
import imageProfileDefault from '../../../assets/images/profile-default.webp';
import { ButtonGenericControl } from "../../../components/Controls/Buttons/ButtonGenericControl";

export const ProfilePhotoCard = () => {
    return (
        <Card
            sx={{
                p: 3,
                borderRadius: '16px',
                boxShadow: 'var(--customShadows-card)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                alignItems: 'center',
                width: '100%',
                height: '100%',
            }}
        >
            <Box width={'100%'}>
                <Typography variant="subtitle1" width='100%' fontWeight={600} fontSize={'1.0625rem'} lineHeight={'1.56'} textAlign={'start'}>
                    Foto de perfil
                </Typography>
                <Typography variant="body2" width='100%' fontWeight='400' fontSize='0.875rem' color="text.secondary" margin='4px 0px 0px' textAlign='start'>
                    Tu imagen de perfil en la clínica.
                </Typography>
            </Box>
            <Box
                sx={{
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '1px solid var(--palette-grey-100)'
                }}
            >
                <img src={imageProfileDefault} alt="Foto de perfil" height={'20px'} width={'200px'} />
            </Box>
            <ButtonGenericControl
                label="Cambiar Foto de Perfil"
                disabled={true}
            />
        </Card>
    );
};