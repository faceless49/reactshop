import s from "./AdvertHeader.module.scss";

function AdvertHeader(props) {
  return (
    <div className="advert_header">
      <span style={props.style} className={s.advert}>
        {props.text}
      </span>
      <span> {props.text}</span>
    </div>
  );
}

export default AdvertHeader;
