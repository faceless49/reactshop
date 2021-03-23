import { NavLink } from "react-router-dom";
import s from "./HeaderBottom.module.scss";

export function HeaderBottom (props) {
  return (
    <div className={s.header_bottom}>
      <NavLink className={s.header_link}to={'/'}>{props.linkName}Квадроциклы</NavLink>
      <NavLink className={s.header_link}to={'/'}>{props.linkName1}Катера</NavLink>
      <NavLink className={s.header_link}to={'/'}>{props.linkName2}Гидроциклы</NavLink>
      <NavLink className={s.header_link}to={'/'}>{props.linkName3}Лодки</NavLink>
      <NavLink className={s.header_link}to={'/'}>{props.linkName4}Вездеходы</NavLink>
      <NavLink className={s.header_link}to={'/'}>{props.linkName5}Снегоходы</NavLink>
      <NavLink className={s.header_link}to={'/'}>{props.linkName6}Двигатели</NavLink>
      <NavLink className={s.header_link}to={'/'}>{props.linkName7}Запчасти</NavLink>
    </div>
  );
}

