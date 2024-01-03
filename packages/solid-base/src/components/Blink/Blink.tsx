import { JSX, ParentComponent, splitProps } from 'solid-js';

import { mergeClass } from '../../utils/mergeClass';
import styles from './Blink.module.css';

const Blink: ParentComponent<JSX.IntrinsicElements['div']> = (_props) => {
  const [parent, props] = splitProps(_props, ['children']);
  return (
    <div {...props} class={mergeClass(styles.Blink, props.class)}>
      {parent.children}
    </div>
  );
};

export default Blink;
