import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container';


/**
 * Tabs for selecting theme categories, using MUI components.
 * @param {object} props
 * @param {string[]} props.categories - List of category names.
 * @param {function} props.onSelect - Callback when tab is selected.
 */
function ThemeCategoriesTabs({ categories, onSelect }) {
  const [value, setValue] = React.useState(categories[0] || '');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (onSelect) onSelect(newValue);
  };

  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="Theme categories"
      >
        {categories.map((cat) => (
          <Tab key={cat} value={cat} label={cat} />
        ))}
      </Tabs>
    </Container>
  );
}

export default ThemeCategoriesTabs;
