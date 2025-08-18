import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function HeroHeader({ onCustomTheme }) {
  return (
    <Box
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
      }}
    >
      {/* SVG hero pattern overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 260,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <svg
          width="100%"
          height="260"
          viewBox="0 0 1440 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
          px: 3,
          pt: 2,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <img
            src="https://jumpy2.com/img/logos/Jumpy2-logo-green-black.png"
            alt="Jumpy Theme Customizer Logo"
            style={{ width: 48, height: 48, marginRight: 12 }}
          />
          <Typography
            variant="h5"
            sx={{
              color: '#fff',
              fontWeight: 700,
              letterSpacing: '-1px',
              textShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
          >
            Jumpy Theme Customizer
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=brsjsk&repo=jumpy-theme-customizer&type=star&count=true&size=large"
            frameBorder="0"
            scrolling="0"
            width="120"
            height="30"
            title="GitHub"
          ></iframe>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 4,
          position: 'relative',
          zIndex: 1,
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
          }}
        >
          Instantly preview, generate, and copy beautiful color themes for the Jumpy2 VS Code
          extension.
        </Typography>
        <Typography variant="h6" align="center" sx={{ color: '#f7faff', maxWidth: 700, mb: 2 }}>
          No login required—just customize and copy!
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
            fontSize: 18,
            letterSpacing: '-1px',
            transition: 'background 0.2s',
            '&:hover': {
              background: 'linear-gradient(90deg, #00b34a 0%, #00d85d 100%) !important',
              color: '#fff',
              boxShadow: '0 8px 32px rgba(0,216,93,0.18)',
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
