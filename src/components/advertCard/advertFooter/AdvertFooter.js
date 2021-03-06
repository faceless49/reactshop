import s from './AdvertFooter.module.scss';



function AdvertFooter(props) {
  return (
    <div className="advert_footer">
      <span className="advert_text">{props.text}</span>
      <span className="advert_time">{props.text}</span>
    </div>
  );
}

export default AdvertFooter;
