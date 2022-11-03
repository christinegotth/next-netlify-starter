import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
      </footer>
    </>
  );
}
