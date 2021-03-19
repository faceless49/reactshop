import Button from "../../../components/button/Button";
import CardImage from "../../../components/card/cardImage/CardImage";
import s from "./AdvertBlock.module.scss";
import maverick from '../../../assets/advertblock/maverik1.png'
import maverick2 from '../../../assets/advertblock/maverik2.png'



export const AdvertBlock = (props) => {
  return (
    <section className={s.advert}>
      <div className="advert_imgWrapper">
      <CardImage imgUrl={maverick}/>
      <CardImage imgUrl={maverick2}/>
      </div>
      <h2 className={s.advert_title}>
        <span className={s.advert_textUppercase}>CКИДКИ</span><br/> на все запчасти до 70%
      </h2>
      <a href="#" className={s.advert_link}>ПОСМОТРЕТЬ ВСЕ</a>
    </section>
  );
};

