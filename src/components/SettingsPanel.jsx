import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

function SettingsPanel({ onOpenChange }) {
  // ...existing logic for state and effects...
  const getSystemDark = () =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const getSaved = (key, fallback) => {
    const val = localStorage.getItem(key);
    if (val === null) return fallback;
    return val === 'true';
  };
  const [darkMode, setDarkMode] = useState(getSaved('darkMode', getSystemDark()));
  const [autoDark, setAutoDark] = useState(getSaved('autoDark', false));
  const [largeFont, setLargeFont] = useState(getSaved('largeFont', false));
  const [highContrast, setHighContrast] = useState(getSaved('highContrast', false));
  const [dyslexiaFont, setDyslexiaFont] = useState(getSaved('dyslexiaFont', false));

  React.useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    localStorage.setItem('autoDark', autoDark);
    localStorage.setItem('largeFont', largeFont);
    localStorage.setItem('highContrast', highContrast);
    localStorage.setItem('dyslexiaFont', dyslexiaFont);
  }, [darkMode, autoDark, largeFont, highContrast, dyslexiaFont]);

  React.useEffect(() => {
    if (autoDark) {
      const updateDark = () => {
        const sysDark = getSystemDark();
        setDarkMode(sysDark);
      };
      updateDark();
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateDark);
      return () =>
        window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', updateDark);
    }
  }, [autoDark]);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  React.useEffect(() => {
    if (largeFont) {
      document.body.classList.add('large-font');
    } else {
      document.body.classList.remove('large-font');
    }
  }, [largeFont]);

  React.useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast]);

  React.useEffect(() => {
    if (dyslexiaFont) {
      document.body.classList.add('dyslexia-font');
    } else {
      document.body.classList.remove('dyslexia-font');
    }
  }, [dyslexiaFont]);

  return (
    <Box sx={{ width: 320, p: 2 }}>
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          textAlign: 'center',
          fontWeight: 700,
          letterSpacing: '-1px',
          color: 'primary.main',
        }}
      >
        Settings
      </Typography>
      <Stack spacing={2}>
        <FormControlLabel
          control={<Switch checked={autoDark} onChange={(e) => setAutoDark(e.target.checked)} />}
          label="Auto Dark Mode (system preference)"
        />
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              disabled={autoDark}
            />
          }
          label="Dark Mode (UI only)"
        />
        <FormControlLabel
          control={<Switch checked={largeFont} onChange={(e) => setLargeFont(e.target.checked)} />}
          label="Large Font Size"
        />
        <FormControlLabel
          control={
            <Switch checked={highContrast} onChange={(e) => setHighContrast(e.target.checked)} />
          }
          label="High Contrast Mode"
        />
        <FormControlLabel
          control={
            <Switch checked={dyslexiaFont} onChange={(e) => setDyslexiaFont(e.target.checked)} />
          }
          label="Dyslexia-Friendly Font"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => onOpenChange(false)}
          sx={{ alignSelf: 'flex-end', mt: 2 }}
        >
          Close
        </Button>
      </Stack>
      <Typography variant="body2" sx={{ mt: 2, textAlign: 'center', color: 'text.secondary' }}>
        (Settings are saved locally and do not affect theme JSON.)
      </Typography>
    </Box>
  );
}

export default SettingsPanel;
