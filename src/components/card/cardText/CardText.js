import s from './CardText.module.scss';



function CardText(props) {
  return (
    <span className={s.CardText}>{props.text}</span>
  );
}
export default CardText;
