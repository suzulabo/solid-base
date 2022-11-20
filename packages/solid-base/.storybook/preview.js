import BaseStyles from '../src/components/BaseStyle/BaseStyle';
import Theme from '../src/components/Theme/Theme';

export const decorators = [
  (Story) => {
    return (
      <div>
        <Theme>
          <BaseStyles />
          <Story />
        </Theme>
      </div>
    );
  },
];
