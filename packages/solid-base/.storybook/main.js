module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials'],

  /*
  It won't work
  Use .babelrc

  babel: async (options) => ({
    ...options,
    presets: ['solid'],
  }),
  */
};
