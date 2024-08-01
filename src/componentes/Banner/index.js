import styles from "./Banner.module.css";
import minhaFoto from "assets/minha_foto.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>

        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Diego Franco, instrutor de
          Front-end. Aqui compartilho vários conhecimentos, espero que aprenda
          algo novo :)
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto do Diego Franco sorrindo"
        />
      </div>
    </div>
  );
}
