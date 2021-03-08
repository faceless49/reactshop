import CardTitle from '../card/cardTitle/CardTitle';
import s from './AdvertCard.module.scss';
import AdvertFooter from './advertFooter/AdvertFooter';
import AdvertHeader from './advertHeader/AdvertHeader';
import AdvertImage from './advertImage/AdvertImage';




function AdvertCard(props) {
  return (
    <div className={s.advertcard}>
      <AdvertHeader/>
      <AdvertImage/>
      <CardTitle/>
      <AdvertFooter/>
    </div>
  );
}

export default AdvertCard;
