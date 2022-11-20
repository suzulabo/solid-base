import BaseStyles from '../src/components/BaseStyle';
import Theme from '../src/components/Theme';

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
