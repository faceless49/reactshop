import AdvertLabel from "../advertLabel/AdvertLabel";
import AdvertText from "../advertText/AdvertText";
import s from "./AdvertHeader.module.scss";



const AdvertHeader = (props) => {
  return (
    <div className={s.advert_header}>
      <AdvertLabel text="Акция" style={{padding: '9px 20px'}}/>
      <AdvertText text="190 000"/>
      <AdvertText style={{textDecoration: "line-through", color: '#C4C4C4', fontSize: '14px'}} text="225 000 &#x20bd;"/>
    </div>
  );
}

export default AdvertHeader;
