import { createGlobalStyles } from 'solid-styled-components';
import resetCss from 'the-new-css-reset/css/reset.css';

const BaseStyles = () => {
  const Styles = createGlobalStyles(resetCss);
  return <Styles />;
};

export default BaseStyles;
