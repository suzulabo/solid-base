import addons from '@storybook/addons';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import BaseStyle from '../src/components/BaseStyle/BaseStyle';
import { setThemeMode } from '../src/components/Theme/theme';

const channel = addons.getChannel();

export const decorators = [
  (Story) => {
    channel.on(DARK_MODE_EVENT_NAME, (darkMode) => {
      setThemeMode(darkMode ? 'dark' : 'light');
    });

    return (
      <div>
        <BaseStyle />
        <Story />
      </div>
    );
  },
];
