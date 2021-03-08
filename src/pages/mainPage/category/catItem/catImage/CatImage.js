import s from './CatImage.module.scss';





function CatImage(props) {
  return (
    <img alt="" className={s.cat_image} src={props.src}/>
  );
}

export default CatImage;




