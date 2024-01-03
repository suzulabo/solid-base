import Blink from './Blink';

export default {
  title: 'Blink',
};

export const Default = () => {
  return (
    <Blink>
      <div style={{ 'font-size': '100px' }}>Hello</div>
    </Blink>
  );
};

export const UserClass = () => {
  return (
    <>
      <style>
        {`.red {
        color: red;
      }`}
      </style>
      <Blink class="red">class</Blink>
      <Blink classList={{ red: true }}>classList</Blink>
    </>
  );
};
