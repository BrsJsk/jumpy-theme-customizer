import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ThemePreview from './ThemePreview';
import AccessibilityCheck from './AccessibilityCheck';

/**
 * Modal dialog to preview and copy theme JSON for a selected theme.
 * @param {Object} props
 * @param {boolean} props.open - Whether the modal is open.
 * @param {Function} props.onOpenChange - Callback to open/close modal.
 * @param {Object} props.theme - Theme object to preview.
 * @returns {JSX.Element|null}
 */
function ThemeModal({ open, onOpenChange, theme }) {
  if (!theme) return null;
  const json = JSON.stringify(
    {
      'workbench.colorCustomizations': {
        'jumpy2.labelFontColor': theme.colors.labelFontColor,
        'jumpy2.labelBackgroundColor': theme.colors.labelBackgroundColor,
        'jumpy2.labelBorderColor': theme.colors.labelBorderColor,
        'jumpy2.checkered_labelFontColor': theme.colors.checkered_labelFontColor,
        'jumpy2.checkered_labelBackgroundColor': theme.colors.checkered_labelBackgroundColor,
        'jumpy2.checkered_labelBorderColor': theme.colors.checkered_labelBorderColor,
      },
    },
    null,
    2
  );

  return (
    <Dialog open={open} onClose={() => onOpenChange(false)} maxWidth="md" fullWidth>
      <DialogTitle>{theme.name} Theme JSON</DialogTitle>
      <DialogContent>
        <Stack spacing={3} alignItems="center">
          <ThemePreview theme={theme} />
          <AccessibilityCheck theme={theme} />
          <Box sx={{ width: '100%' }}>
            <pre
              style={{
                marginBottom: 16,
                background: '#f0f4ff',
                padding: 18,
                borderRadius: 8,
                fontSize: '1rem',
                color: '#222',
                overflowX: 'auto',
              }}
            >
              {json}
            </pre>
          </Box>
          <Button
            onClick={() => navigator.clipboard.writeText(json)}
            variant="contained"
            sx={{
              fontWeight: 700,
              color: '#fff',
              background: 'linear-gradient(90deg, #00d85d 0%, #00b34a 100%)',
              borderRadius: 2,
              px: 3,
              py: 1,
              fontSize: 16,
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
            Copy JSON
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

export default ThemeModal;
