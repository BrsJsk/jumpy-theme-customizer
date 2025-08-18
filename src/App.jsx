import React, { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  // Only use a single light theme
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'light',
          primary: {
            main: '#00d85d',
            light: '#4be88a',
            dark: '#009c3c',
            contrastText: '#fff',
          },
          secondary: {
            main: '#fff',
            contrastText: '#00b34a',
          },
          background: {
            default: '#eafcf2',
            paper: '#fff',
          },
        },
        typography: {
          fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
          fontWeightBold: 700,
        },
        shape: {
          borderRadius: 12,
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                fontWeight: 600,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                boxShadow: '0 4px 16px rgba(0,216,93,0.08)',
              },
            },
          },
          MuiDialog: {
            styleOverrides: {
              paper: {
                borderRadius: 12,
              },
            },
          },
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
