import monokaiImage from '../assets/monokai.png';
import atomOneDarkImage from '../assets/atomonedark.png';
import tokyoNightImage from '../assets/tokyonight.png';
import nightOwlImage from '../assets/nightowl.png';

// Predefined themes for Jumpy2
export const themes = [
  {
    name: 'Monokai',
    image: monokaiImage,
    colors: {
      labelFontColor: '#F8F8F2',
      labelBackgroundColor: '#272822',
      labelBorderColor: '#F92672',
      checkered_labelFontColor: '#F8F8F2',
      checkered_labelBackgroundColor: '#49483E',
      checkered_labelBorderColor: '#A6E22E',
    },
  },
  {
    name: 'Atom One Dark',
    image: atomOneDarkImage,
    colors: {
      labelFontColor: '#ABB2BF',
      labelBackgroundColor: '#282C34',
      labelBorderColor: '#61AFEF',
      checkered_labelFontColor: '#ABB2BF',
      checkered_labelBackgroundColor: '#3E4451',
      checkered_labelBorderColor: '#C678DD',
    },
  },
  {
    name: 'Tokyo Night',
    image: tokyoNightImage,
    colors: {
      labelFontColor: '#A6DAF8',
      labelBackgroundColor: '#1A1B26',
      labelBorderColor: '#7AA2F7',
      checkered_labelFontColor: '#A6DAF8',
      checkered_labelBackgroundColor: '#2E3A59',
      checkered_labelBorderColor: '#BB9AF7',
    },
  },
  {
    name: 'Night Owl',
    image: nightOwlImage,
    colors: {
      labelFontColor: '#C3E88D',
      labelBackgroundColor: '#011627',
      labelBorderColor: '#82AAFF',
      checkered_labelFontColor: '#C3E88D',
      checkered_labelBackgroundColor: '#1D3B53',
      checkered_labelBorderColor: '#F78C6C',
    },
  },
];
