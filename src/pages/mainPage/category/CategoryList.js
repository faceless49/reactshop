import s from "./CategoryList.module.scss";
import CatItem from './catItem/CatItem';



const CategoryList = (props) => {
    return ( 
        <section className={s.category_list}> 
        <CatItem text='Квадроциклы' style={{  
  backgroundImage: "url(" + "../../../assets/category/hydro.png" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}/>
        <CatItem text='Гидроциклы'style={{backgroundColor: "red"}}/>
        <CatItem text='Катера'style={{background: '../../../assets/category/boat.png'}}/>
        <CatItem text='Снегоходы'style={{background: '../../../assets/category/snow.png'}}/>
        <CatItem text='Вездеходы'style={{background: '../../../assets/category/maverick.png'}}/>
        <CatItem text='Двигатели'style={{background: '../../../assets/category/engine.png'}}/>
        </section>
    )
}

export default CategoryList;