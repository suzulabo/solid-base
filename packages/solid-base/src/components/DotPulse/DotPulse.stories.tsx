import DotPulse from './DotPulse';

export default {
  title: 'DotPulse',
};

export const Default = () => {
  return (
    <div style={{ margin: '100px' }}>
      <DotPulse />
    </div>
  );
};

export const Large = () => {
  return (
    <div style={{ margin: '100px' }}>
      <DotPulse size="100px" />
    </div>
  );
};
