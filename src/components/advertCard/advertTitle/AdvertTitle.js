import s from './AdvertTitle.module.scss';



function AdvertTitle(props) {
  return (
    <h3 className={s.advert_title}>{props.text}</h3>
  );
}

export default AdvertTitle;
