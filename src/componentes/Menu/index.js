import MenuLink from "../MenuLink";
import styles from "./Menu.module.css";
import logo from "../../assets/conquisti.png";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">
          <img src={logo} alt="ConquisTi Logo" className={styles.logo} />
        </MenuLink>
      </nav>
    </header>
  );
}
