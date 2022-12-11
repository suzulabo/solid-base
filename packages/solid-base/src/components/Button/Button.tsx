import type { ParentComponent } from 'solid-js';

import './Button.css';

const Button: ParentComponent = (props) => {
  return <button {...props}>{props.children}</button>;
};

export default Button;
