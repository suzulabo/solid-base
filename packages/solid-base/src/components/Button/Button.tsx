import styles from './Button.module.css';

import type { JSX, ParentComponent } from 'solid-js';

const Button: ParentComponent<JSX.IntrinsicElements['button']> = (props) => {
  return (
    <button {...props} class={styles.Button}>
      {props.children}
    </button>
  );
};

export default Button;
