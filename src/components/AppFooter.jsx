import React from 'react';
import Box from '@mui/material/Box';
import Contributors from './Contributors';

/**
 * Renders the application footer with project info and contributors.
 * @returns {JSX.Element}
 */
function AppFooter() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 3,
        textAlign: 'center',
        color: 'text.secondary',
        fontSize: 15,
        borderTop: '1px solid #e3eafc',
        background: 'rgba(245,250,255,0.7)',
      }}
    >
      <span>
        Made with ❤️ for VS Code Jumpy2 &nbsp;|&nbsp;{' '}
        <a
          href="https://github.com/BrsJsk/jumpy-theme-customizer"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#7AA2F7', textDecoration: 'none', fontWeight: 600 }}
        >
          GitHub
        </a>{' '}
        &nbsp;|&nbsp;{' '}
        <a
          href="https://brsjsk.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#7AA2F7', textDecoration: 'none', fontWeight: 600 }}
        >
          Author
        </a>
      </span>
      <Contributors />
    </Box>
  );
}

export default AppFooter;
