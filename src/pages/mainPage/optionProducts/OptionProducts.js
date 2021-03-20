import { LinkList } from "../../../components/linksList/LinkList";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import s from "./OptionProducts.module.scss";
import { OptionSlider } from "./optionSlider/OptionSlider";
import Button from "../../../components/button/Button";


export const OptionProducts = (props) => {
  return (
    <section className={s.option_products}>
      <SectionTitle />
      <div className={s.option_nav}>
        <LinkList />
        <OptionSlider />
        <Button/>
      </div>
    </section>
  );
};
