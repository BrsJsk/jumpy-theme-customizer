import { useMemo } from 'react';

export default function useAccessibilityCheck(theme) {
  // Example: check contrast between background and font color
  function getContrast(hex1, hex2) {
    // ...simple contrast logic...
    function hexToRgb(hex) {
      hex = hex.replace('#', '');
      const bigint = parseInt(hex, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return [r, g, b];
    }
    function luminance([r, g, b]) {
      const a = [r, g, b].map((v) => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
    }
    const lum1 = luminance(hexToRgb(hex1));
    const lum2 = luminance(hexToRgb(hex2));
    const contrast = (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
    return contrast;
  }

  return useMemo(() => {
    if (!theme || !theme.colors) return null;
    return {
      labelContrast: getContrast(theme.colors.labelBackgroundColor, theme.colors.labelFontColor),
      checkeredContrast: getContrast(
        theme.colors.checkered_labelBackgroundColor,
        theme.colors.checkered_labelFontColor
      ),
    };
  }, [theme]);
}
