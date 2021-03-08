import CatImage from "./catImage/CatImage";
import s from "./CatItem.module.scss";

 const CatItem = (props) => {
  return (
    <div className={s.cat_item}>
      <div className={s.cat_descr}>
        <h2 className={s.cat_title}>{props.text}</h2>
        <a href="#" className={s.cat_link}>
          Подробнее
        </a>
        <CatImage src={props.imgUrl}/> 
      </div>
    </div>
  );
}

export default CatItem;
