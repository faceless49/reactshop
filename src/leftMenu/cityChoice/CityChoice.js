import "./CityChoice.css"

function CityChoice(){
    return(
    <>
        <div className="city__choice">
        <label><input type="checkbox"></input>Россия</label>
        <label><input type="checkbox"></input>Германия</label>
        <label><input type="checkbox"></input>Китай</label>
        <label><input type="checkbox"></input>США</label>
        </div>
        <a className="showMores" href="">Показать еще</a>
    </>
    )
}

export default CityChoice;