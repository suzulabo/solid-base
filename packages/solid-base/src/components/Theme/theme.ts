import { createSignal } from 'solid-js';

export const lightTheme = {
  colors: {
    text: '#212121',
    background: '#ffffff',
    border: '#212121',
    hover: '#f5f5f5',
  },
};

type Theme = typeof lightTheme & Record<string, unknown>;

const [_getTheme, _setTheme] = createSignal<Theme>(lightTheme);

export const setTheme = (v: Theme) => {
  _setTheme(v);
};

export const getTheme = () => _getTheme();
