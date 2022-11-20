import BaseStyles from '../components/BaseStyle';

import type { ParentComponent } from 'solid-js';

const StorybookRoot: ParentComponent = (props) => {
  return (
    <div>
      <BaseStyles />
      {props.children}
    </div>
  );
};

export default StorybookRoot;
