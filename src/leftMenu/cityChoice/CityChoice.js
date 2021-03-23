import "./CityChoice.css"

function CityChoice(){
    return(
    <div className="city">
        <div class="city__choice">
        <label><input type="checkbox"></input>Россия</label>
        <label><input type="checkbox"></input>Германия</label>
        <label><input type="checkbox"></input>Китай</label>
        <label><input type="checkbox"></input>США</label>
        </div>
        <a class="showMore" href="">Показать еще</a>
    </div>
    )
}

export default CityChoice;