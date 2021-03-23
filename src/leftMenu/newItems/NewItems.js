import "./NewItems.css"

function NewItems(){
    return(
        <div className="newItems1">
            <label><input type="checkbox"></input>Все</label>
            <label><input type="checkbox"></input>Новинки</label>
            <label><input type="checkbox"></input>Акции</label>
        </div>
    )
}

export default NewItems;