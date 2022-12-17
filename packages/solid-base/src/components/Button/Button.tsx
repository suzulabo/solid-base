import styles from './Button.module.css';

import type { ParentComponent } from 'solid-js';

const Button: ParentComponent = (props) => {
  return (
    <button {...props} class={styles.Button}>
      {props.children}
    </button>
  );
};

export default Button;
