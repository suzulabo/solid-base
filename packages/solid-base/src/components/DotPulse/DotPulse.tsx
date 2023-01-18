import { mergeClass } from '../../utils/mergeClass';
import styles from './DotPulse.module.css';

import type { VoidComponent } from 'solid-js';

type Props = {
  class?: string;
};

const DotPulse: VoidComponent<Props> = (props) => {
  return (
    <div class={mergeClass(styles['dot-pulse'], props.class)}>
      <div class={styles['dot-pulse__dot']} />
    </div>
  );
};

export default DotPulse;
