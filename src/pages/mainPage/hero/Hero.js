import s from "./Hero.module.scss";
import AdvertCard   from '../../../components/advertCard/AdvertCard'
import MainSlider from "../mainSlider/MainSlider";


const Hero = (props) => {
    return (
        <section className={s.hero}>
            <MainSlider/>
            <AdvertCard/>
        </section>
    )
}

export default Hero;