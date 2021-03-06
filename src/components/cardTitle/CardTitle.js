import s from './CardTitle.module.scss';



function CardTitle(props) {
  return (
    <h3 className={s.card_title}>{props.text}</h3>
  );
}
export default CardTitle;
