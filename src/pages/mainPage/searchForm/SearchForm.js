import Button from "../../../components/button/Button";
import s from "./SearchForm.module.scss";



const SearchForm = (props) => {
    return (
        <div className="search_wrapper">
        <div className="search_form">
            <ul className="search_tabs">
                <li className="search_tab">{props.text}</li>
                <li className="search_tab">{props.text}</li>
                <li className="search_tab">{props.text}</li>
            </ul>
            </div>
            <form action="submit" className="search_bar">
                <input type="text" className="search_input" placeholder={props.placeholder}/>
                <Button/>
            </form>
        </div>
    )
}

export default SearchForm;