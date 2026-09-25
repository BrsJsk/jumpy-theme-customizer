import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logoImage from '../assets/Jumpy2-logo-green-black.png';

function HeroHeader({ onCustomTheme = () => {} }) {
  return (
    <Box
      component="header"
      sx={{
        width: '100%',
        minHeight: 260,
        background: 'radial-gradient(circle at 30% 40%, #00d85d 70%, #00b34a 100%)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        pb: 6,
        mb: 4,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2.5" fill="#fff" opacity="0.12" />
            </pattern>
          </defs>
          <rect width="1440" height="260" fill="url(#dots)" />
          <ellipse cx="1200" cy="80" rx="180" ry="60" fill="#fff" opacity="0.08" />
          <ellipse cx="300" cy="180" rx="120" ry="40" fill="#fff" opacity="0.06" />
        </svg>
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: { xs: 2, sm: 3 },
          pt: 2,
          position: 'relative',
          zIndex: 1,
          gap: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, minWidth: 0 }}>
          <img
            src={logoImage}
            alt="Jumpy Theme Customizer logo"
            style={{ width: 48, height: 48, objectFit: 'contain', flexShrink: 0 }}
          />
          <Typography
            variant="h5"
            sx={{
              color: '#fff',
              fontWeight: 700,
              letterSpacing: '-1px',
              textShadow: '0 2px 8px rgba(0,0,0,0.08)',
              fontSize: { xs: '1.05rem', sm: '1.5rem' },
              lineHeight: 1.2,
            }}
          >
            Jumpy Theme Customizer
          </Typography>
        </Box>

        <Button
          component="a"
          href="https://github.com/brsjsk/jumpy-theme-customizer"
          target="_blank"
          rel="noreferrer"
          variant="contained"
          size="small"
          aria-label="Open the Jumpy Theme Customizer GitHub repository in a new tab"
          sx={{
            color: '#0b0f17',
            background: '#ffffff',
            borderRadius: 999,
            px: 2,
            py: 0.75,
            fontWeight: 700,
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': {
              background: '#f4f7f6',
              boxShadow: 'none',
            },
          }}
        >
          GitHub
        </Button>
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: { xs: 3, md: 4 },
          px: { xs: 2, sm: 3 },
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: '#fff',
            fontWeight: 800,
            letterSpacing: '-2px',
            mb: 2,
            textShadow: '0 2px 8px rgba(0,0,0,0.18)',
            maxWidth: { xs: '100%', md: 980 },
            fontSize: { xs: '2.1rem', sm: '2.7rem', md: '4rem' },
            lineHeight: 1.08,
          }}
        >
          Instantly preview, generate, and copy themes for the Jumpy2 VS Code
          extension.
        </Typography>

        <Button
          onClick={onCustomTheme}
          size="large"
          variant="contained"
          sx={{
            fontWeight: 700,
            boxShadow: '0 4px 16px rgba(0,216,93,0.12)',
            color: '#fff',
            background: 'linear-gradient(90deg, #00d85d 0%, #00b34a 100%)',
            borderRadius: 3,
            px: 4,
            py: 1.5,
            mt: 2,
            fontSize: { xs: 16, md: 18 },
            letterSpacing: '-1px',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
            '&:hover': {
              background: 'linear-gradient(90deg, #00b34a 0%, #00d85d 100%) !important',
              color: '#fff',
              boxShadow: '0 8px 32px rgba(0,216,93,0.18)',
              transform: 'translateY(-1px)',
            },
            '&:focus-visible': {
              outline: '3px solid rgba(255,255,255,0.75)',
              outlineOffset: '2px',
            },
          }}
        >
          Generate Custom Theme
        </Button>
      </Box>
    </Box>
  );
}

export default HeroHeader;
