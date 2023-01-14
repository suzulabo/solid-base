import styles from './Button.module.css';

import type { JSX, ParentComponent } from 'solid-js';

const Button: ParentComponent<JSX.IntrinsicElements['button']> = (props) => {
  return (
    <button
      {...props}
      classList={{ [styles.Button]: true, ...props.classList }}
    >
      {props.children}
    </button>
  );
};

export default Button;
