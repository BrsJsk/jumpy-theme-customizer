import React from 'react';
import Tooltip from '@mui/material/Tooltip';


/**
 * Tooltip wrapper using MUI Tooltip for color picker elements.
 * @param {object} props
 * @param {React.ReactNode} props.children - The element to wrap with tooltip.
 * @param {string} props.label - The tooltip text.
 */
function ColorPickerTooltip({ children, label }) {
  return (
    <Tooltip title={label} placement="top" arrow>
      {children}
    </Tooltip>
  );
}

export default ColorPickerTooltip;
