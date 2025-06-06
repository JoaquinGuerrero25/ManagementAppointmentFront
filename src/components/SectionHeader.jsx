import { Box, Typography } from "@mui/material";
import { ButtonGenericControl } from "./Controls/Buttons/ButtonGenericControl";
import { AddRounded } from "@mui/icons-material";

export const SectionHeader = ({ title = '', description = '', buttonLabel, onButtonClick, iconButton, children }) => {
    return (
        <Box
            width={'100%'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'start'}
            gap={'calc(2 * var(--spacing))'}
        >
            <Box
                width={'100%'}
                display='flex'
                justifyContent='space-between'
                gap='calc(2 * var(--spacing))'
                sx={{
                    alignItems: { xs: 'start', md: 'center' },
                    flexDirection: { xs: 'column', md: 'row' }
                }}
            >
                <Box display='flex' flexDirection='column' alignItems='start' justifyContent='center' gap='var(--spacing)'>
                    <Typography variant="h2" component='h2' sx={{ fontSize: '28px', fontWeight: '700' }}>
                        {title}
                    </Typography>
                    <Typography component='p' variant="subtitle1" color="textSecondary">
                        {description}
                    </Typography>
                </Box>
                {buttonLabel && onButtonClick && (
                    <ButtonGenericControl
                        label={buttonLabel}
                        icon={iconButton || <AddRounded fontSize="large" />}
                        iconPosition="start"
                        action={onButtonClick}
                    />
                )}
            </Box>
            {children}
        </Box>
    );
};