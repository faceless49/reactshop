import s from "./CategoryList.module.scss";
import CatItem from "./catItem/CatItem";
import quadro from "../../../assets/category/quadro.png"; 
import hydro from "../../../assets/category/hydro.png"
import boat from "../../../assets/category/boat.png"
import snow from "../../../assets/category/snow.png"
import maverick from "../../../assets/category/maverick.png"
import engine from "../../../assets/category/engine.png"







const CategoryList = (props) => {
  const data = {
    title: 'Квадроциклы',
    title2: 'Гидроциклы',
    title3: 'Квадроциклы',
    title4: 'Квадроциклы',
    title5: 'Квадроциклы',
    title6: 'Квадроциклы'
  }
  return (
    <section className={s.categories}>
      <CatItem title={data.title} imgUrl={quadro}/>
      <CatItem title={data.title2} imgUrl={hydro} />
      <CatItem title={data.title3} imgUrl={boat} />
      <CatItem title={data.title4} imgUrl={snow} />
      <CatItem title={data.title5} imgUrl={maverick} />
      <CatItem title={data.title6} imgUrl={engine} />
    </section>
  );
};

export default CategoryList;
