import React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ThemeCard from './ThemeCard';

function ThemeGrid({ themes, onThemeSelect }) {
  return (
    /**
     * Renders a grid of theme cards for browsing and selection.
     * @param {Object} props
     * @param {Array} props.themes - Array of theme objects.
     * @param {Function} props.onThemeSelect - Callback for selecting a theme.
     * @returns {JSX.Element}
     */
    <Container sx={{ px: 0, py: 4 }}>
      <Stack alignItems="center" spacing={4} sx={{ mt: 8 }}>
        <Typography variant="h4" color="primary" fontWeight={800} letterSpacing={-1} gutterBottom>
          Browse Themes
        </Typography>
        <Grid container spacing={4} sx={{ width: '100%' }}>
          {themes.map((theme) => (
            <Grid item size={6} key={theme.name} display="flex" justifyContent="center">
              <ThemeCard
                theme={theme}
                onClick={() => onThemeSelect(theme)}
                sx={{ width: '100%' }}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}

export default ThemeGrid;
