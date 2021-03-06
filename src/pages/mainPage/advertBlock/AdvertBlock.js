import Button from "../../../components/button/Button";
import s from "./CategoryList.module.scss";

const AdvertBlock = (props) => {
  return (
    <section className="advert_block">
      <img src={props.imageUrl} alt="" className="advert_image" />
      <img src={props.imageUrl} alt="" className="advert_image" />
      <h2 className="advert_title">
        <span className="advert_uppecase">CКИДКИ</span>на все запчасти до 70%
      </h2>
      <Button/>
    </section>
  );
};

export default AdvertBlock;
