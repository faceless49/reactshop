import "./App.scss";
import Header from "./pages/header/Header";
import CategoryList from "./pages/mainPage/category/CategoryList";
import Hero from "./pages/mainPage/hero/Hero";
import SearchForm from "./pages/mainPage/searchForm/SearchForm";
<<<<<<< HEAD
import Footer from "./components/footer/Footer"
import Pickup from "./components/pickup/Pickup";



function App() {
    return (
    <div className="App">
      <Header/>
      <Hero/>
      <SearchForm placeholder='Введите марку' text1='Поиск по  номеру' text2='Поиск по марке' text3='Поиск по названию товара'/>
      <Footer/>
      <Pickup/>
    </div>
=======
import { BrowserRouter } from "react-router-dom";
import AdvertBlock from "./pages/mainPage/advertBlock/AdvertBlock";
import Footer from "./components/footer/Footer";
import PopularSlider from "./pages/mainPage/popularSlider/PopularSlider";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <section className="hero">
        <Hero/>
        </section>
        <section className="category">
          <SearchForm text1="Поиск по  номеру" text2="Поиск по марке" text3="Поиск по названию товара" placeholder="Введите марку "/>
          <CategoryList />
        </section>
        <AdvertBlock/>
        <PopularSlider/>
      <Footer/>

      </div>
    </BrowserRouter>
>>>>>>> 8984ecd0099d66cdd067dc048c84fc4aa53000a2
  );
};
export default App;
