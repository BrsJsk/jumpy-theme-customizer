import React from 'react';
import { Helmet } from 'react-helmet';
import HeroHeader from '../components/HeroHeader';
import ThemeGrid from '../components/ThemeGrid';
import ThemeModal from '../components/ThemeModal';
import CustomThemeGenerator from '../components/CustomThemeGenerator';
import AppFooter from '../components/AppFooter';
import useThemeModals from '../hooks/useThemeModals';
import { themes } from '../shared/themes';

function Home() {
  const {
    selectedTheme,
    themeModalOpen,
    customModalOpen,
    openThemeModal,
    closeThemeModal,
    openCustomModal,
    closeCustomModal,
  } = useThemeModals();

  return (
    <>
      <Helmet>
        <title>Jumpy Theme Customizer – Instantly Preview & Generate VS Code Themes</title>
        <meta
          name="description"
          content="Instantly preview, generate, and copy themes for the Jumpy2 VS Code extension. No login required—just customize and copy!"
        />
        <link rel="canonical" href="https://jumpy-theme.joskonic.com/" />
        <meta property="og:title" content="Jumpy Theme Customizer" />
        <meta
          property="og:description"
          content="Instantly preview, generate, and copy themes for the Jumpy2 VS Code extension."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jumpy-theme.joskonic.com/" />
        <meta property="og:image" content="/src/assets/Jumpy2-logo-green-black.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jumpy Theme Customizer" />
        <meta
          name="twitter:description"
          content="Instantly preview, generate, and copy themes for the Jumpy2 VS Code extension."
        />
        <meta property="twitter:image" content="/src/assets/Jumpy2-logo-green-black.png" />
      </Helmet>
      <HeroHeader onCustomTheme={openCustomModal} />
      <ThemeGrid themes={themes} onThemeSelect={openThemeModal} />
      <ThemeModal open={themeModalOpen} onOpenChange={closeThemeModal} theme={selectedTheme} />
      <CustomThemeGenerator open={customModalOpen} onOpenChange={closeCustomModal} />
      <AppFooter />
    </>
  );
}

export default Home;
