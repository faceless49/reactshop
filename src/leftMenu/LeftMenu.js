import Availability from "./availability/Availability"
import Price from "./price/Price"
import "./LeftMenu.css"
import arrow from "../assets/images/icons-for-LM/arrow.png"
import LeftMenuBottom from "./leftMenuBottom/LeftMenuBottom"
import Acordion from "./acordion/Acordion"
import Powers from "./powers/Powers"
import NewItems from "./newItems/NewItems"
import Brend from "./brend/Brend"
import Pattern from "./pattern/Pattern"
import Promotion from "./promotion/Promotion"
import CityChoice from "./cityChoice/CityChoice"


function LeftMenu(){
    const data = {
        title: 'Наличие',
        img: arrow,
    }
    const data2 = {
        title: 'Новинки',
        img: arrow,
    }
    const data3 = {
        title: 'Цена',
        img: arrow,
    }
    const data4 = {
        title: 'Бренд',
        img: arrow,
    }
    const data5 = {
        title: 'Модель',
        img: arrow,
    }
    const data6 = {
        title: 'Акции',
        img: arrow,
    }
    const data7 = {
        title: 'Страна',
        img: arrow,
    }

    return(
        <>
        <div className="leftMenu__wrapper">
        <div class="links">
            <a href="">Параметры</a>
            <a href="">По марке</a>
        </div>
            <Acordion title={data.title} img={data.img}/>
            <Availability/>
            <LeftMenuBottom/>
            <Acordion title={data2.title} img={data2.img}/>
            <NewItems/>
            <Acordion title={data3.title} img={data3.img}/>
            <Price/>
            <Powers/>
            <Acordion title={data4.title} img={data4.img}/>
            <Brend/>
            <Acordion title={data5.title} img={data5.img}/>
            <Pattern/>
            <Acordion title={data6.title} img={data6.img}/>
            <Promotion/>
            <Acordion title={data7.title} img={data7.img}/>
            <CityChoice/>
        </div>
        </>
    );
}

export default LeftMenu;