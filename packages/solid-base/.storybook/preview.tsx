import BaseStyle from '../src/components/BaseStyle/BaseStyle';

export const decorators = [
  (Story: Function) => {
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
