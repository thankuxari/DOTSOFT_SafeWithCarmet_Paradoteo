import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

export default function ProgressBar({value}){

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 12,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[200],
            ...theme.applyStyles('dark', {
            backgroundColor: theme.palette.grey[800],
            }),
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: 'var(--status-ok)',
            ...theme.applyStyles('dark', {
            backgroundColor: '#308fe8',
            }),
        },
    }));

    return <BorderLinearProgress
        variant="determinate"
        sx={{width: "45%"}}
        value={value.slice(0, value.length - 1)}
        aria-label="Export data"
      />
}