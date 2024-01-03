import { mergeClass } from '../../utils/mergeClass';
import styles from './Button.module.css';

import type { JSX, ParentComponent } from 'solid-js';

const Button: ParentComponent<JSX.IntrinsicElements['button']> = (props) => {
  return (
    <button {...props} class={mergeClass(styles.Button, props.class)}>
      {props.children}
    </button>
  );
};

export default Button;
