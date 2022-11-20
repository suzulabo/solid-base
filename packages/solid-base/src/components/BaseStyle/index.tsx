import { createGlobalStyles, useTheme } from 'solid-styled-components';
import resetCss from 'the-new-css-reset/css/reset.css';

const BaseStyles = () => {
  const theme = useTheme();

  const Styles = createGlobalStyles([
    resetCss,
    {
      'html,body': {
        color: theme.colors.text,
        backgroundColor: theme.colors.background,
        fontSize: '16px',
      },
    },
  ]);
  return <Styles />;
};

export default BaseStyles;
