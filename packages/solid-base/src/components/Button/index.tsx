import { styled, useTheme } from 'solid-styled-components';

const Button = styled('button')(() => {
  const theme = useTheme();

  return {
    border: `1px solid ${theme.colors.border}`,
  };
});

export default Button;
