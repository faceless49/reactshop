import advertimage from '../../../assets/advertitem/1.png'
import s from './AdvertImage.module.scss'

const AdvertImage = (props) => {
  return (
   <img src={advertimage} alt="adverimg" className={s.advertimage}/>
  )
}

export default AdvertImage;
