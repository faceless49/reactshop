import s from './Card.module.scss';
import CardImage from './cardImage/CardImage';
import CardTitle from './cardTitle/CardTitle';
import CardText from './cardText/CardText';
import Button from '../button/Button';



const Card = (props) => {
  return (
    <div className={s.card}>
      <CardImage imgUrl={props.src}/>
      <CardTitle text={props.title}/>
      <CardText text={props.text}/>
      <Button style={{alignSelf: 'flex-end'}}/>
    </div>
  );
}

export default Card;
