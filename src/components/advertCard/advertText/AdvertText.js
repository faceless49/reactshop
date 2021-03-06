import s from "./AdvertText.module.scss";

const AdvertText = (props) => {
  return (
    <span style={props.style} className={s.advert_text}>
    {props.text}</span>
  );
};

export default AdvertText;
