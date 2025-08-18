import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ThemePreview from './ThemePreview';
import AccessibilityCheck from './AccessibilityCheck';

/**
 * Default color values for custom theme generator.
 * @type {Object}
 */
const defaultColors = {
  labelFontColor: '#A6DAF8',
  labelBackgroundColor: '#1A1B26',
  labelBorderColor: '#7AA2F7',
  checkered_labelFontColor: '#A6DAF8',
  checkered_labelBackgroundColor: '#2E3A59',
  checkered_labelBorderColor: '#BB9AF7',
};

/**
 * Validates if a string is a hex color code.
 * @param {string} color - The color string to validate.
 * @returns {boolean} True if valid hex color, false otherwise.
 */
function isValidColor(color) {
  return /^#[0-9A-Fa-f]{6}$/.test(color);
}

/**
 * Modal dialog for generating a custom Jumpy2 theme.
 * @param {Object} props
 * @param {boolean} props.open - Whether the modal is open.
 * @param {function} props.onOpenChange - Callback to open/close modal.
 */
function CustomThemeGenerator({ open, onOpenChange }) {
  /**
   * State for theme colors.
   */
  const [colors, setColors] = useState(defaultColors);
  /**
   * State for copy-to-clipboard feedback.
   */
  const [copied, setCopied] = useState(false);

  /**
   * Handles color input changes.
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  const handleChange = (e) => {
    setColors({ ...colors, [e.target.name]: e.target.value });
  };

  /**
   * JSON string for VS Code theme customization.
   */
  const json = JSON.stringify(
    {
      'workbench.colorCustomizations': {
        'jumpy2.labelFontColor': colors.labelFontColor,
        'jumpy2.labelBackgroundColor': colors.labelBackgroundColor,
        'jumpy2.labelBorderColor': colors.labelBorderColor,
        'jumpy2.checkered_labelFontColor': colors.checkered_labelFontColor,
        'jumpy2.checkered_labelBackgroundColor': colors.checkered_labelBackgroundColor,
        'jumpy2.checkered_labelBorderColor': colors.checkered_labelBorderColor,
      },
    },
    null,
    2
  );

  /**
   * Whether all color inputs are valid hex codes.
   */
  const allValid = Object.values(colors).every(isValidColor);

  return (
    <Dialog
      open={open}
      onClose={() => onOpenChange(false)}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          background: '#fff',
          borderRadius: 0,
          width: '100vw',
          m: 0,
          boxShadow: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 2,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          mt: 4,
          mb: 1,
        }}
      >
        <DialogTitle
          sx={{
            flex: 1,
            textAlign: 'center',
            fontWeight: 800,
            fontSize: 28,
            color: '#222',
            letterSpacing: '-2px',
            m: 0,
            p: 0,
          }}
        >
          Generate Custom Theme
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => onOpenChange(false)}
          sx={{ color: '#222', mr: 2 }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
      </Box>
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
        }}
      >
        <Box
          component="form"
          sx={{
            mb: 2,
            width: '100%',
            maxWidth: 480,
            background: '#f7faff',
            borderRadius: 3,
            p: 3,
            boxShadow: 1,
          }}
        >
          <Stack spacing={2}>
            {Object.keys(colors).map((key) => (
              <Box key={key} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography sx={{ minWidth: 140, fontWeight: 600, color: '#222' }}>
                  {key}
                </Typography>
                <input
                  type="color"
                  name={key}
                  value={colors[key]}
                  onChange={handleChange}
                  style={{
                    border: 'none',
                    background: 'none',
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                  }}
                />
                <TextField
                  name={key}
                  value={colors[key]}
                  onChange={handleChange}
                  inputProps={{ maxLength: 7 }}
                  sx={{ width: 80, color: '#222' }}
                />
              </Box>
            ))}
          </Stack>
        </Box>
        <Typography
          variant="subtitle1"
          sx={{ mt: 2, mb: 1, fontWeight: 700, color: '#555', fontSize: 18, textAlign: 'center' }}
        >
          Live Theme Preview
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 1,
            width: '100%',
          }}
        >
          <ThemePreview theme={{ colors }} />
        </Box>
        <AccessibilityCheck theme={{ colors }} />
        <Box sx={{ mt: 1, width: '100%', maxWidth: 480 }}>
          <pre
            style={{
              background: '#f5f5f5',
              padding: 10,
              borderRadius: 6,
              color: '#222',
              fontWeight: 600,
              fontSize: 13,
            }}
          >
            {json}
          </pre>
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
        <Button
          /**
           * Copies the theme JSON to clipboard and shows feedback.
           */
          disabled={!allValid}
          onClick={() => {
            navigator.clipboard.writeText(json);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          variant="contained"
          color="inherit"
          sx={{
            fontWeight: 700,
            px: 3,
            py: 1,
            fontSize: 16,
            borderRadius: 3,
            background: '#eaeaea',
            color: '#222',
            boxShadow: 0,
          }}
        >
          {copied ? 'Copied!' : 'Copy JSON'}
        </Button>
      </DialogActions>
      {!allValid && (
        <Typography sx={{ textAlign: 'center', mb: 2, color: '#d32f2f', fontWeight: 600 }}>
          All colors must be valid hex codes.
        </Typography>
      )}
    </Dialog>
  );
}

export default CustomThemeGenerator;
