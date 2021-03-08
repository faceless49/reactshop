import s from "./CardImage.module.scss";

function CardImage(props) {
  return <img src={props.imgUrl} alt={props.alt} className="card_img" />;
}
export default CardImage;
