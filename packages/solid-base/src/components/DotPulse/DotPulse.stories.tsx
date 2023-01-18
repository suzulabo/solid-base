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
    <>
      <style>
        {`.large {
          --uib-size: 100px;
      }`}
      </style>
      <div style={{ margin: '100px' }}>
        <DotPulse class="large" />
      </div>
    </>
  );
};
