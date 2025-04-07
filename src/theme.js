// src/theme.js
import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#4a90e2',
    },
    secondary: {
      main: '#f5a623',
    },
    background: {
      default: mode === 'light' ? '#f2f2f2' : '#121212',
      paper: mode === 'light' ? '#fff' : '#1e1e1e',
    },
    text: {
      primary: mode === 'light' ? '#000' : '#fff',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h4: { fontWeight: 700 },
    body1: { lineHeight: 1.7 },
  },
});

export const getTheme = (mode) => createTheme(getDesignTokens(mode));
