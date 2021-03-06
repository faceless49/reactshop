import CatImage from "./catImage/CatImage";
import s from "./CatItem.module.scss";

function CatItem(props) {
  return (
    <div className="cat_item">
      <div className="cat_descr">
        <h2 className="cat_title">{props.text}</h2>
        <a href="#" className="cat_link">
          Подробнее
        </a>
      </div>
      <CatImage />
    </div>
  );
}

export default CatItem;
