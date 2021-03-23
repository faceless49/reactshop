
import "./Availability.css"

function Availability(){
    return(
        <div className="availability">
            <label><input type="checkbox" name="pass"></input>В наличие</label>
            <label><input type="checkbox" name="pass1"></input>Под заказ</label>
        </div>
    );
}

export default Availability;