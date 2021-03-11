import "./Pickup.css"



function Pickup() {
    return (
    <div className="pickup">
        <div className="holder">
        <div>
            <span>Магазин</span>
            <input className="shop" type="text" placeholder=""/>
        </div>
        <div>
            <input type="checkbox"/>Забрать сегодня
        </div>
        </div>
        <table className="table" border="1" cellpadding="40" cellspacing="0" >
        <tr>
            <th>Адрес</th>
            <th>Режим работы</th>
            <th>Доступо</th>
            <th>Количество</th>
        </tr>
        <tr>
            <td>Москва,ул. Науки 25</td>
            <td>пн-сб: 08:00-19:00<br/>
                вс:    09:00-17:00
            </td>
            <td>В наличии</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Москва,ул.Южная 134</td>
            <td>
                пн-сб: 08:00-19:00<br/>
                вс:    09:00-17:00
            </td>
            <td>В наличии</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Санк-Петербург,<br/>
                ул.Красная 19
            </td>
            <td>пн-сб: 08:00-19:00<br/>
                вс:    09:00-17:00
            </td>
            <td>В наличии</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Киев,ул Шевченко 167</td>
            <td>
                пн-сб: 08:00-19:00<br/>
                вс:    09:00-17:00
            </td>
            <td>В наличии</td>
            <td>0</td>
        </tr>
        </table>
    </div>
);
}
export default Pickup;