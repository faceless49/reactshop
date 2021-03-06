import s from './AdvertCard.module.scss';
import AdvertFooter from './advertFooter/AdvertFooter';
import AdvertHeader from './advertHeader/AdvertHeader';
import AdvertImage from './advertImage/AdvertImage';
import CardTitle from '../cardTitle/CardTitle'




function AdvertCard(props) {
  return (
    <div className={s.advertcard}>
      <AdvertHeader/>
      <AdvertImage/>
      <CardTitle text='Лодочный мотор Suzuki DF9.9BRS'/>
      <AdvertFooter/>
    </div>
  );
}

export default AdvertCard;
