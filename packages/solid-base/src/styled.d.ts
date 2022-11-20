import 'solid-styled-components';

declare module 'solid-styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
      background: string;
      border: string;
    };
  }
}
