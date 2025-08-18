import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function AccessibilityCheck({ theme }) {
  /**
   * Checks accessibility contrast ratios for theme colors and displays results.
   * @param {Object} props
   * @param {Object} props.theme - Theme object with colors.
   * @returns {JSX.Element|null}
   */
  if (!theme) return null;
  // Simple contrast check (WCAG AA): returns true if contrast is sufficient
  function getContrast(hex1, hex2) {
    function luminance(hex) {
      let rgb = parseInt(hex.slice(1), 16);
      let r = (rgb >> 16) & 255,
        g = (rgb >> 8) & 255,
        b = rgb & 255;
      [r, g, b] = [r, g, b].map((v) => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }
    let l1 = luminance(hex1),
      l2 = luminance(hex2);
    let ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    return ratio;
  }

  const labelContrast = getContrast(theme.colors.labelFontColor, theme.colors.labelBackgroundColor);
  const checkeredContrast = getContrast(
    theme.colors.checkered_labelFontColor,
    theme.colors.checkered_labelBackgroundColor
  );

  return (
    <Stack spacing={2} sx={{ mt: 2, width: '100%' }}>
      <Alert severity={labelContrast >= 4.5 ? 'success' : 'error'}>
        <Typography>
          Label font/background contrast ratio: {labelContrast.toFixed(2)}{' '}
          {labelContrast >= 4.5 ? '(AA pass)' : '(Too low)'}
        </Typography>
      </Alert>
      <Alert severity={checkeredContrast >= 4.5 ? 'success' : 'error'}>
        <Typography>
          Checkered label font/background contrast ratio: {checkeredContrast.toFixed(2)}{' '}
          {checkeredContrast >= 4.5 ? '(AA pass)' : '(Too low)'}
        </Typography>
      </Alert>
    </Stack>
  );
}

export default AccessibilityCheck;
