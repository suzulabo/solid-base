import { createSignal } from 'solid-js';
import { isServer } from 'solid-js/web';

const lightTheme = {
  colors: {
    text: '#212121',
    background: '#ffffff',
    border: '#212121',
    hover: '#f5f5f5',
  },
};

const darkTheme = {
  colors: {
    text: '#fafafa',
    background: '#000000',
    border: '#fafafa',
    hover: '#424242',
  },
};

export type Theme = typeof lightTheme & Record<string, unknown>;

type ThemeMode = 'auto' | 'light' | 'dark';
type ThemeInfo = {
  theme: Theme;
  mode: ThemeMode;
};

type Api = {
  setThemeMode: (mode: ThemeMode) => void;
  getTheme: () => Theme;
};

const api = ((): Api => {
  if (isServer) {
    return {
      setThemeMode: () => {
        return;
      },
      getTheme: () => darkTheme,
    };
  }

  const preferDarkModeMedia = window.matchMedia('(prefers-color-scheme: dark)');

  preferDarkModeMedia.addEventListener('change', () => {
    if (getThemeInfo().mode == 'auto') {
      setThemeInfo({
        theme: isPreferDark() ? darkTheme : lightTheme,
        mode: 'auto',
      });
    }
  });

  const isPreferDark = () => {
    if (isServer) {
      return true;
    }
    return preferDarkModeMedia.matches;
  };

  const [getThemeInfo, setThemeInfo] = createSignal<ThemeInfo>({
    theme: isPreferDark() ? darkTheme : lightTheme,
    mode: 'auto',
  });

  const setThemeMode = (mode: ThemeMode) => {
    switch (mode) {
      case 'light':
        setThemeInfo({ theme: lightTheme, mode });
        break;
      case 'dark':
        setThemeInfo({ theme: darkTheme, mode });
        break;
      case 'auto':
        setThemeInfo({ theme: isPreferDark() ? darkTheme : lightTheme, mode });
        break;
    }
  };

  const getTheme = () => {
    return getThemeInfo().theme;
  };

  return { setThemeMode, getTheme };
})();

export const setThemeMode = api.setThemeMode;
export const getTheme = api.getTheme;
