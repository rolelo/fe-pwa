import {
  AppBar, Box, Tab, Tabs,
} from '@mui/material';
import React from 'react';
import RDrawer from '../drawer';
import Create from './create';
import View from './view';

const Organisation = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <>
      <AppBar position="relative" color="inherit" style={{ padding: 0 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="View Organisations" />
          <Tab label="Create Organisation" />
        </Tabs>
      </AppBar>
      <Box sx={{ padding: '2rem' }}>
        <View />
        <RDrawer
          title="Create Organisation"
          subtitle="Organisation"
          open={tabValue === 1}
          onClose={() => setTabValue(0)}
        >
          <Create />
        </RDrawer>
      </Box>
    </>
  );
};

export default Organisation;
