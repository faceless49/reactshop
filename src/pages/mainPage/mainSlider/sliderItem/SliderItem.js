import s from "./SliderItem.module.scss";


const SliderItem = (props) => {
    return (
<>
<img src={props.imgUrl} alt={props.alt} className='mainSlider_img'/>
</>
    )
}

export default SliderItem;