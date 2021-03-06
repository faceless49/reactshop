import s from "./CategoryList.module.scss";
import CatItem from "./catItem/catItem";



const CategoryList = (props) => {
    return (
        <section className="category_list">
        <CatItem/>
        <CatItem/>
        <CatItem/>
        <CatItem/>
        <CatItem/>
        </section>
    )
}

export default CategoryList;