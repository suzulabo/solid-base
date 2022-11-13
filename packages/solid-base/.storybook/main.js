module.exports = {
  stories: ['../src/components'],
  addons: ['@storybook/addon-essentials'],
  babel: async (options) => ({
    ...options,
    presets: ['solid'],
  }),
};
