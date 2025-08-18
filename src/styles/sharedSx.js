// Shared style objects for MUI sx prop

export const buttonGreenGradient = {
  fontWeight: 700,
  color: '#fff',
  background: 'linear-gradient(90deg, #00d85d 0%, #00b34a 100%)',
  borderRadius: 3,
  px: 4,
  py: 1.5,
  fontSize: 18,
  letterSpacing: '-1px',
  boxShadow: '0 4px 16px rgba(0,216,93,0.12)',
  transition: 'background 0.2s, box-shadow 0.2s, transform 0.2s',
  '&:hover': {
    background: 'linear-gradient(90deg, #00b34a 0%, #00d85d 100%) !important',
    color: '#fff',
    boxShadow: '0 8px 32px rgba(0,216,93,0.18)',
    transform: 'scale(1.05)',
  },
};
