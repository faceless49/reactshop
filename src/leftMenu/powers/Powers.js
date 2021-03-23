import "./Powers.css"

function Powers(){
    return(
        <div className="power">
            <div class="capacity">
            <label>Мощность, л.с </label>
            <select class="power__select" name="power">
                <option value="90">90</option>
                <option value="130">130</option>
                <option value="154">154</option>
                <option value="230">230</option>
                <option value="300">300</option>
            </select>
        </div>
        <div class="enginePower">
            <label>Мощность двигателя, л.с</label>
            <select class="power__select" name="power">
                <option value="90">90</option>
                <option value="130">130</option>
                <option value="154">154</option>
                <option value="230">230</option>
                <option value="300">300</option>
            </select>
        </div>
        <div class="maxSpeed">
            <label>Макс. скорость</label>
            <select class="power__select" name="power">
                <option value="90">90</option>
                <option value="130">130</option>
                <option value="154">154</option>
                <option value="230">230</option>
                <option value="300">300</option>
            </select>
        </div>
        </div>
    )
}

export default Powers;