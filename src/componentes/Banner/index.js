import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}></div>
      <div className={styles.imagens}></div>
    </div>
  );
}
