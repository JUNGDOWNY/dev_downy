import Style  from "./header.module.scss";
import { Plane } from "lucide-react";

const Header = () => (
  <header className={Style.header}>
    <a href="/" aria-label="홈으로 이동">DOWNY TRIP</a>
    <Plane size={26} color="#fff" />
  </header>
);

export default Header;
