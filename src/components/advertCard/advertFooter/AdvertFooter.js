import AdvertText from '../advertText/AdvertText';
import s from './AdvertFooter.module.scss';


 
const AdvertFooter = (props) => {
  return (
    <div className={s.advert_footer}>
      <AdvertText text='Акция действует до' style={{display: 'block', color: '#2F3035', fontSize: '18px'}}/>
      <AdvertText text='31.08.2020' style={{display: 'block', fontFamily: 'Barlow', fontWeight: '700', fontSize: '18px'}}/>
    </div>
  );
}

export default AdvertFooter;
