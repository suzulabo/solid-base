import { createGlobalStyles } from 'solid-styled-components';
import resetCss from 'the-new-css-reset/css/reset.css';

import { getTheme } from '../Theme/theme';

const BaseStyle = () => {
  const makeGlobalStyle = () => {
    const theme = getTheme();
    return {
      'html,body': {
        color: theme.colors.text,
        backgroundColor: theme.colors.background,
        fontSize: '16px',
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
      },
    };
  };

  return <>{createGlobalStyles([resetCss, makeGlobalStyle()])}</>;
};

export default BaseStyle;
