import { createSignal } from 'solid-js';

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
  return preferDarkModeMedia.matches;
};

const [getThemeInfo, setThemeInfo] = createSignal<ThemeInfo>({
  theme: isPreferDark() ? darkTheme : lightTheme,
  mode: 'auto',
});

export const setThemeMode = (mode: ThemeMode) => {
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

export const getTheme = () => getThemeInfo().theme;
