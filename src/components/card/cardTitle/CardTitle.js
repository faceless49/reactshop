import s from './CardTitle.module.scss';



function CardTitle(props) {
  return (
    <h3 className={s.card_title}>{props.title}</h3>
  );
}
export default CardTitle;
