import Box from '../Box/Box';
import Blink from './Blink';

export default {
  title: 'Blink',
};

export const Default = () => {
  return (
    <Blink>
      <Box style={{ 'font-size': '100px' }}>Hello</Box>
    </Blink>
  );
};
