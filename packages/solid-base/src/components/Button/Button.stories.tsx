import Button from './Button';

export default {
  title: 'Button',
};

export const Default = () => {
  return <Button>Button</Button>;
};

export const UserClass = () => {
  return (
    <>
      <style>
        {`.red {
        color: red;
        margin: 0 5px;
      }`}
      </style>
      <Button class="red">class</Button>
      <Button classList={{ red: true }}>classList</Button>
    </>
  );
};
