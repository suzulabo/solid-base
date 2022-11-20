import { DefaultTheme, ThemeProvider } from 'solid-styled-components';

import type { ParentComponent } from 'solid-js';

const lightTheme: DefaultTheme = {
  colors: {
    text: '#333333',
    background: '#ffffff',
    border: '#333333',
  },
};

const Theme: ParentComponent = (props) => {
  return <ThemeProvider theme={lightTheme}>{props.children}</ThemeProvider>;
};

export default Theme;
