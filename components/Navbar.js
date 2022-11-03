import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <ul>
          <li>
            <a href="#whoami">who am i?</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}
