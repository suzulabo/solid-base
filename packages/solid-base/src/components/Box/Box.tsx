import { JSX, ParentComponent, splitProps } from 'solid-js';

const Box: ParentComponent<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const [parent, base] = splitProps(props, ['children']);
  return <div {...base}>{parent.children}</div>;
};

export default Box;
