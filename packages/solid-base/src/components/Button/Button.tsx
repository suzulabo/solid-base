import { styled, useTheme } from 'solid-styled-components';

const Button = styled('button')(() => {
  const theme = useTheme();

  return {
    'display': 'inline-block',
    'border': `2px solid ${theme.colors.border}`,
    'borderRadius': '10px',
    'padding': '10px 20px',
    'textAlign': 'center',
    'width': 'max-content',

    '&:active': {
      position: 'relative',
      top: '1px',
      left: '1px',
    },

    '@media (hover: hover)': {
      '&:hover:not(:disabled)': {
        backgroundColor: theme.colors.hover,
        cursor: 'pointer',
      },
    },
  };
});

export default Button;
