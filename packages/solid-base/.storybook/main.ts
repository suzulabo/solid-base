import type { StorybookConfig } from '@storybook/types';

const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: ['storybook-dark-mode'],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
};

export default config;
