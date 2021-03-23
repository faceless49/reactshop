import "./Price.css"
import arrow from "../../assets/images/icons-for-LM/arrow.png"

function Price(){
    return(
        <div className="price2">
            <input type="range" min="100.000" max="500.000"></input>
            <div className="prices">
                <span>от 100.000</span>
                <span>до 500.000</span>
            </div>
        </div>
    );
}

export default Price;