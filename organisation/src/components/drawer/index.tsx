import {
  Divider, Drawer, DrawerProps, Typography,
} from '@mui/material';
import React from 'react';

type Props = {
  title: string;
  subtitle: string;
} & DrawerProps;

const RDrawer: React.FC<Props> = ({
  children, subtitle, title, ...rest
}) => (
  <Drawer
    {...rest}
    anchor="right"
    sx={{
      '& .MuiPaper-root': {
        width: '50rem',
        padding: '2rem',
      },
    }}
  >
    <div>
      <Typography variant="h6" style={{ opacity: 0.6 }}>{subtitle}</Typography>
      <Typography variant="h2">{title}</Typography>
    </div>
    <Divider style={{ margin: '2rem 0' }} />
    {children}
  </Drawer>
);

export default RDrawer;
