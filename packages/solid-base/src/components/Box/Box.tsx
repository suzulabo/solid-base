import type { ParentComponent } from 'solid-js';

const Box: ParentComponent = (props) => {
  return <div {...props}>{props.children}</div>;
};

export default Box;
