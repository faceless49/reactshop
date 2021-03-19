import { NavLink } from "react-router-dom";
import s from "./HeaderBottom.module.scss";

export function HeaderBottom (props) {
  return (
    <div className={s.header_bottom}>
      <NavLink to={'/'}>{props.linkName}Квадроциклы</NavLink>
      <NavLink to={'/'}>{props.linkName1}Катера</NavLink>
      <NavLink to={'/'}>{props.linkName2}Гидроциклы</NavLink>
      <NavLink to={'/'}>{props.linkName3}Лодки</NavLink>
      <NavLink to={'/'}>{props.linkName4}Вездеходы</NavLink>
      <NavLink to={'/'}>{props.linkName5}Снегоходы</NavLink>
      <NavLink to={'/'}>{props.linkName6}Двигатели</NavLink>
      <NavLink to={'/'}>{props.linkName7}Запчасти</NavLink>
    </div>
  );
}

