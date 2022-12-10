module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: ['storybook-dark-mode'],

  /*
  It won't work
  Use .babelrc

  babel: async (options) => ({
    ...options,
    presets: ['solid'],
  }),
  */
};
