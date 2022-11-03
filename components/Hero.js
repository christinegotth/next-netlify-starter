import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <h1>I give a fuck, do you?</h1>
        <img src="/me.png" />
      </div>
    </>
  );
}
