import { useState } from 'react';

export default function useThemeModals() {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [themeModalOpen, setThemeModalOpen] = useState(false);
  const [customModalOpen, setCustomModalOpen] = useState(false);

  const openThemeModal = (theme) => {
    setSelectedTheme(theme);
    setThemeModalOpen(true);
  };

  const closeThemeModal = () => {
    setThemeModalOpen(false);
    setSelectedTheme(null);
  };

  const openCustomModal = () => setCustomModalOpen(true);
  const closeCustomModal = () => setCustomModalOpen(false);

  return {
    selectedTheme,
    themeModalOpen,
    customModalOpen,
    openThemeModal,
    closeThemeModal,
    openCustomModal,
    closeCustomModal,
  };
}
