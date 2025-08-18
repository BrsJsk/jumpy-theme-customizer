// Theme utilities for color logic and validation

export const defaultColors = {
  labelFontColor: '#A6DAF8',
  labelBackgroundColor: '#1A1B26',
  labelBorderColor: '#7AA2F7',
  checkered_labelFontColor: '#A6DAF8',
  checkered_labelBackgroundColor: '#2E3A59',
  checkered_labelBorderColor: '#BB9AF7',
};

export function isValidColor(color) {
  return /^#[0-9A-Fa-f]{6}$/.test(color);
}
