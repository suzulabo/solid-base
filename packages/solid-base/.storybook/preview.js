import { createComponent } from 'solid-js/web';
import StorybookRoot from '../src/storybook/StorybookRoot';

export const decorators = [
  (Story) => {
    return createComponent(StorybookRoot, { children: Story });
  },
];
