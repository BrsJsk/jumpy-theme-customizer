import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function ThemeFormFields({ colors, onChange }) {
  return (
    <Stack spacing={2}>
      {Object.keys(colors).map((key) => (
        <Box key={key} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography sx={{ minWidth: 140, fontWeight: 600, color: '#222' }}>{key}</Typography>
          <input
            type="color"
            name={key}
            value={colors[key]}
            onChange={onChange}
            style={{ border: 'none', background: 'none', width: 28, height: 28, borderRadius: 6 }}
          />
          <TextField
            name={key}
            value={colors[key]}
            onChange={onChange}
            inputProps={{ maxLength: 7 }}
            sx={{ width: 80, color: '#222' }}
          />
        </Box>
      ))}
    </Stack>
  );
}

export default ThemeFormFields;
