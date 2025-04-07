import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box mt={5} py={3} textAlign="center"
      sx={{
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderRight: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography variant="body2">Developed by Shramana Sarkar</Typography>
    </Box>
  );
};

export default Footer;
