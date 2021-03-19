import { NavLink } from "react-router-dom";
import Address from "./address/Address";
import s from "./HeaderTop.module.scss";
import Logo from "./logo/Logo";
import Navigation from "./navigation/Navigation";
import Socials from "./socials/Socials";

export function HeaderTop (props) {
  return (
    <div className={s.header}>
      <Navigation/>
      <Logo/>
      <Address/>
      <Socials/>
    </div>
  );
}

