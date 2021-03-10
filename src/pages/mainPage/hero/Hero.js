import s from "./Hero.module.scss";
import AdvertCard   from '../../../components/advertCard/AdvertCard'
import MainSlider from "../mainSlider/MainSlider";


const Hero = (props) => {
    return (
        <div className={s.hero_wrapper}>
            <MainSlider/>
            <AdvertCard/>
        </div>
    )
}

export default Hero;