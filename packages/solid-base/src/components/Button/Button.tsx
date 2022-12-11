import './Button.css';

import type { ParentComponent } from 'solid-js';

const Button: ParentComponent = (props) => {
  return <button {...props}>{props.children}</button>;
};

export default Button;
