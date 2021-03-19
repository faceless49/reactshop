import Button from "../../../components/button/Button";
import { LinkList } from "../../../components/linksList/LinkList";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import PopularSlider from "../popularSlider/PopularSlider";
import s from "./Products.module.scss";


export const Products = (props) => {
  return (
   <section className={s.products}>
     <SectionTitle/>
     <div className={s.productsLinks}>
      <LinkList/>
       <PopularSlider/>
       <Button/>
     </div>
   </section>
  );
};

