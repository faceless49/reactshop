import s from './CatImage.module.scss';





function CatImage(props) {
  return (
    <img src="{props.imageUrl}" alt="" className="cat_image"/>
  );
}

export default CatImage;
