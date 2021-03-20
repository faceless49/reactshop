import AdvertLabel from "../advertLabel/AdvertLabel";
import AdvertText from "../advertText/AdvertText";
import s from "./AdvertHeader.module.scss";



const AdvertHeader = (props) => {
  return (
    <div className={s.advert_header}>
      <AdvertLabel text="Акция" className={s.advert_label} style={{padding: '9px 20px'}}/>
      <div className={s.advert_price}>
      <AdvertText text="190 000 &#8381;"/>
      <AdvertText style={{color: '#C4C4C4', fontSize: '14px'}} text="225 000 &#x20bd;"/>
      </div>
    </div>
  );
}

export default AdvertHeader;
