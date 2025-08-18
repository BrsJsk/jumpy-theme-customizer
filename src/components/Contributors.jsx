import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const REPO = 'BrsJsk/jumpy-theme-customizer';

function Contributors() {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${REPO}/contributors`)
      .then((res) => res.json())
      .then((data) => setContributors(Array.isArray(data) ? data : []));
  }, []);

  if (!contributors.length) return null;

  return (
    <Container size="md" sx={{ mt: 4, mb: 2, textAlign: 'center' }}>
      <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: 'primary.main' }}>
        Contributors
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ flexWrap: 'wrap' }}
      >
        {contributors.map((contrib) => (
          <a
            key={contrib.id}
            href={contrib.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Avatar
              src={contrib.avatar_url}
              alt={contrib.login}
              sx={{ width: 36, height: 36, mx: 0.5 }}
            />
            <Typography variant="caption" sx={{ color: '#222', fontWeight: 500 }}>
              {contrib.login}
            </Typography>
          </a>
        ))}
      </Stack>
    </Container>
  );
}

export default Contributors;
