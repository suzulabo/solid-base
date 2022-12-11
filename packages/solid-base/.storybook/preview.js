import BaseStyle from '../src/components/BaseStyle/BaseStyle';

export const decorators = [
  (Story) => {
    return (
      <div>
        <BaseStyle />
        <Story />
      </div>
    );
  },
];

export const parameters = {
  darkMode: {
    stylePreview: true,
  },
};
