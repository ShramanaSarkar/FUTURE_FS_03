import React from 'react';
import { Box, List, ListItem, ListItemText, Typography, useTheme, Link } from '@mui/material';

const Sidebar = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 250,
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderRight: `1px solid ${theme.palette.divider}`,
        p: 2,
        overflowY: 'auto',
      }}
    >
      <Typography variant="h6" gutterBottom>
        <strong>Main Menu</strong>
      </Typography>
      <List>
        {[
          { text: 'Main Page', href: '#title' },
          { text: 'Career Highlights', href: '#career-highlights' },
          { text: 'Reception & Legacy', href: '#reception-legacy' },
          { text: 'Categories', href: '#categories' },
        ].map(({ text, href }) => (
          <ListItem key={text} disablePadding>
            <Link
              href={href}
              underline="none"
              sx={{
                width: '100%',
                padding: 1.5,
                borderRadius: 1,
                display: 'block',
                color: theme.palette.text.primary,
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
