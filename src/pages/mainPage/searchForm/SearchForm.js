import Button from "../../../components/button/Button";
import s from "./SearchForm.module.scss";



const SearchForm = (props) => {
    return (
        <div className={s.search_wrapper}>
        <div className={s.search_form}>
            <ul className={s.search_tabs}>
                <li className={s.search_tab}>{props.text1}Поиск по  номеру</li>
                <li className={s.search_tab}>{props.text2}Поиск по марке</li>
                <li className={s.search_tab}>{props.text3}Поиск по названию товара</li>
            </ul>
            </div>
            <form action={s.submit} className={s.search_bar}>
                <input type="text" className={s.search_input} placeholder={props.placeholder}/>
                <Button style={{borderRadius: '3px'}} text='Искать'/>
            </form>
        </div>
    )
}

export default SearchForm;