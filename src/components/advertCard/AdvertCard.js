import s from './AdvertCard.module.scss';
import AdvertFooter from './advertFooter/AdvertFooter';
import AdvertHeader from './advertHeader/AdvertHeader';
import AdvertImage from './advertImage/AdvertImage';
import AdvertTitle from './advertTitle/AdvertTitle';





function AdvertCard(props) {
  return (
    <div className={s.advertcard}>
      <AdvertHeader/>
      <AdvertImage/>
      <AdvertTitle/>
      <AdvertFooter/>
    </div>
  );
}

export default AdvertCard;
