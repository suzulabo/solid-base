import { VoidComponent, mergeProps } from 'solid-js';

import styles from './DotPulse.module.css';

type Props = {
  size?: string;
};

const DotPulse: VoidComponent<Props> = (_props) => {
  const props = mergeProps({ size: '40px' }, _props);

  return (
    <div class={styles['dot-pulse']} style={{ '--uib-size': props.size }}>
      <div class={styles['dot-pulse__dot']} />
    </div>
  );
};

export default DotPulse;
