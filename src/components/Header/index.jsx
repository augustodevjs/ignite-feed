import style from "./Header.module.css";
import igniteLogo from "../../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={style.header}>
      <img src={igniteLogo} alt="ignite Feed" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
