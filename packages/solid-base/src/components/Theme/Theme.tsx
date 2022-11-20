import { DefaultTheme, ThemeProvider } from 'solid-styled-components';

import type { ParentComponent } from 'solid-js';

const lightTheme: DefaultTheme = {
  colors: {
    text: '#212121',
    background: '#ffffff',
    border: '#212121',
    hover: '#f5f5f5',
  },
};

const Theme: ParentComponent = (props) => {
  return <ThemeProvider theme={lightTheme}>{props.children}</ThemeProvider>;
};

export default Theme;
