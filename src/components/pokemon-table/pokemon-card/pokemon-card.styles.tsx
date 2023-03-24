import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Card = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' || true ? 'rgba(26, 32, 39, 0.2)' : 'rgba(255, 255, 255, 0.1)', // set the background color to a transparent value
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: 'white',
  backdropFilter: 'blur(10px)', // add backdrop filter for acrylic effect
  boxShadow: '0', // add box shadow for depth
  transition: 'transform 0.3s ease-in-out', // add transition for hover effect
  '&:hover': {
    transform: 'scale(1.05)', // increase size on hover
  },
  cursor: 'pointer',
  minHeight:'250px'
}));
