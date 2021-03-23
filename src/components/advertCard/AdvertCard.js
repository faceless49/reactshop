import CardTitle from "../card/cardTitle/CardTitle";
import s from "./AdvertCard.module.scss";
import AdvertFooter from "./advertFooter/AdvertFooter";
import AdvertHeader from "./advertHeader/AdvertHeader";
import AdvertImage from "./advertImage/AdvertImage";

const AdvertCard = (props) => {
  return (
    <div className={s.advertcard}>
      <AdvertHeader />
      <AdvertImage />
      <CardTitle title="Лодочный мотор 
    Suzuki DF9.9BRS"/>
      <AdvertFooter />
    </div>
  );
};

export default AdvertCard;
