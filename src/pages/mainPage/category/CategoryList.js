import s from "./CategoryList.module.scss";
import CatItem from "./catItem/CatItem";
import quadro from "../../../assets/category/quadro.png"; 
import hydro from "../../../assets/category/hydro.png"
import boat from "../../../assets/category/boat.png"
import snow from "../../../assets/category/snow.png"
import maverick from "../../../assets/category/maverick.png"
import engine from "../../../assets/category/engine.png"







const CategoryList = (props) => {
  return (
    <section className={s.categories}>
      <CatItem text="Квадроциклы" imgUrl={quadro}/>
      <CatItem text="Гидроциклы" imgUrl={hydro} />
      <CatItem text="Катера" imgUrl={boat} />
      <CatItem text="Снегоходы" imgUrl={snow} />
      <CatItem text="Вездеходы" imgUrl={maverick} />
      <CatItem text="Двигатели" imgUrl={engine} />
    </section>
  );
};

export default CategoryList;
