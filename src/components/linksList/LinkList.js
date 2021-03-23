import { NavLink } from "react-router-dom";
import s from "./LinkList.module.scss";

export const LinkList = (props) => {
  return (
    <div className={s.links_list}>
      <NavLink to={'/'}>{props.linkName}</NavLink>
      <NavLink to={'/'}>{props.linkName1}</NavLink>
      <NavLink to={'/'}>{props.linkName2}</NavLink>
      <NavLink to={'/'}>{props.linkName3}</NavLink>
      <NavLink to={'/'}>{props.linkName4}</NavLink>
      <NavLink to={'/'}>{props.linkName5}</NavLink>
      <NavLink to={'/'}>{props.linkName6}</NavLink>
    </div>
  );
};
