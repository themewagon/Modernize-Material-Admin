import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const AvatarComponent: Components<Omit<Theme, 'components'>>['MuiAvatar'] = {
  defaultProps: {
    variant: 'rounded',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      boxShadow: theme.shadows[0],
      width: theme.spacing(5),
      height: theme.spacing(5),
    }),
    rounded: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius * 5,
      backgroundColor: theme.palette.background.paper,
    }),
  },
};

export default AvatarComponent;
