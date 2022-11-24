import BaseStyles from '../src/components/BaseStyle/BaseStyle';

export const decorators = [
  (Story) => {
    return (
      <div>
        <BaseStyles />
        <Story />
      </div>
    );
  },
];
