import s from "./AdvertLabel.module.scss";

const AdvertLabel = (props) => {
  return (
    <span style={props.style} className={s.advert_label}>
    {props.text}</span>
  );
};

export default AdvertLabel;
