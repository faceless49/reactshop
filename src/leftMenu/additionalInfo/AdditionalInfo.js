import "./AdditionalInfo.css"

function AdditionalInfo(){
    return(
        <div>
        <div class="additionalInformation">
        <input class="additionalChoice" type="text" placeholder="Выбрать"></input>
        <span class="extraOption">Дополнительные параметры</span>
        <a class="reset" href="">Сбросить фильтр</a>
        </div>
        </div>
    )
}

export default AdditionalInfo;