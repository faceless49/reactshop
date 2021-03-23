import s from "./CardImage.module.scss";

function CardImage(props) {
  return <img src={props.img} alt={props.alt} className={s.card_img} />;
}
export default CardImage;
