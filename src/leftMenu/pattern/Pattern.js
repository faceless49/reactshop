import "./Pattern.css"

function Pattern(){
    return(
    <div>
        <input class="model__text" type="text" id="model" placeholder="Введите модель"></input>
        <div class="seaDoo">
        <label><input type="checkbox" name="seaDooSpark2" id=""></input>Sea-doo Spark 2</label>
        <label><input type="checkbox" name="seaDooSpark90" id=""></input>SeadDoo Spark 90</label>
        <label><input type="checkbox" name="seaDooGTI155" id=""></input>SeaDoo GTI 155</label>
        <label><input type="checkbox" name="seaDooGtr230" id=""></input>SeaDoo GTR 230</label>
        </div>
    </div>
    )
}

export default Pattern;