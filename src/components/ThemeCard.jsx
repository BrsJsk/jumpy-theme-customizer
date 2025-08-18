import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * Renders a theme card with preview swatches and a button to view theme JSON.
 * @param {Object} props
 * @param {Object} props.theme - Theme object with colors and image.
 * @param {Function} props.onClick - Callback for View JSON button.
 * @param {Object} [props.sx] - Optional MUI sx style overrides.
 * @returns {JSX.Element}
 */
function ThemeCard({ theme, onClick, sx }) {
  /**
   * Array of color swatches for preview.
   */
  const previewColors = [
    theme.colors?.labelBackgroundColor,
    theme.colors?.labelFontColor,
    theme.colors?.labelBorderColor,
    theme.colors?.checkered_labelBackgroundColor,
    theme.colors?.checkered_labelFontColor,
    theme.colors?.checkered_labelBorderColor,
  ].filter(Boolean);

  // Render theme card UI
  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: 800,
        minWidth: 220,
        m: 2,
        borderRadius: 3,
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'box-shadow 0.3s, transform 0.3s',
        '&:hover': {
          boxShadow: 8,
          transform: 'translateY(-4px) scale(1.03)',
        },
        ...sx,
      }}
    >
      <CardMedia
        component="img"
        image={theme.image}
        alt={theme.name}
        height={360}
        sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12, objectFit: 'cover' }}
      />
      <CardContent sx={{ p: 2, textAlign: 'center' }}>
        <Stack spacing={1} alignItems="center">
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {theme.name}
          </Typography>
          {/* Mini color preview swatches */}
          <Stack direction="row" spacing={1} sx={{ mb: 1, justifyContent: 'center' }}>
            {previewColors.map((color, idx) => (
              <Box
                key={idx}
                sx={{
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  background: color,
                  border: '1.5px solid #eee',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                }}
              />
            ))}
          </Stack>
          <Button
            variant="contained"
            size="small"
            onClick={onClick}
            aria-label={`Open ${theme.name} theme JSON`}
            sx={{
              fontWeight: 700,
              color: '#fff',
              background: 'linear-gradient(90deg, #00d85d 0%, #00b34a 100%)',
              borderRadius: 2,
              px: 2.5,
              py: 0.5,
              fontSize: 15,
              letterSpacing: '-0.5px',
              boxShadow: '0 2px 8px rgba(0,216,93,0.10)',
              transition: 'background 0.2s, box-shadow 0.2s, transform 0.2s',
              '&:hover': {
                background: 'linear-gradient(90deg, #00b34a 0%, #00d85d 100%) !important',
                color: '#fff',
                boxShadow: '0 4px 16px rgba(0,216,93,0.18)',
                transform: 'scale(1.05)',
              },
            }}
          >
            View JSON
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ThemeCard;
