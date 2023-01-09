import { JSX, ParentComponent, splitProps } from 'solid-js';

import styles from './Blink.module.css';

const Blink: ParentComponent<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const [parent, base] = splitProps(props, ['children']);
  return (
    <div class={styles.Blink} {...base}>
      {parent.children}
    </div>
  );
};

export default Blink;
