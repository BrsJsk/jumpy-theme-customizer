import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

/**
 * Renders a preview of theme label and checkered label styles.
 * @param {Object} props
 * @param {Object} props.theme - Theme object with colors.
 * @returns {JSX.Element|null}
 */
function ThemePreview({ theme }) {
  if (!theme) return null;
  return (
    <Card sx={{ width: 340, m: '0 auto', borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
          Theme Preview
        </Typography>
        <Box
          sx={{
            background: theme.colors.labelBackgroundColor,
            color: theme.colors.labelFontColor,
            border: `2px solid ${theme.colors.labelBorderColor}`,
            borderRadius: 2,
            p: 2,
            mb: 2,
            textAlign: 'center',
          }}
        >
          Label Example
        </Box>
        <Box
          sx={{
            background: theme.colors.checkered_labelBackgroundColor,
            color: theme.colors.checkered_labelFontColor,
            border: `2px dashed ${theme.colors.checkered_labelBorderColor}`,
            borderRadius: 2,
            p: 2,
            textAlign: 'center',
          }}
        >
          Checkered Label Example
        </Box>
      </CardContent>
    </Card>
  );
}

export default ThemePreview;
