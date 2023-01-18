import styles from './BaseStyle.stories.module.css';

export default {
  title: 'BaseStyle',
};

export const Default = () => {
  return <div class={styles.default}>Hello World</div>;
};

export const LightColor = () => {
  return (
    <>
      <div class={styles.disable}>Hello World</div>
    </>
  );
};
