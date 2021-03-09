import "./App.scss";
import Header from "./pages/header/Header";
import CategoryList from "./pages/mainPage/category/CategoryList";
import Hero from "./pages/mainPage/hero/Hero";
import SearchForm from "./pages/mainPage/searchForm/SearchForm";
import Card from "./components/card/Card";
import backpack from "./assets/images/popularSlider/backpack.png";
import { BrowserRouter } from "react-router-dom";
import MainSlider from "./pages/mainPage/mainSlider/MainSlider";
import AdvertCard from "./components/advertCard/AdvertCard";
import AdvertBlock from "./pages/mainPage/advertBlock/AdvertBlock";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Hero/>
        <section className="category">
          <SearchForm text1="Поиск по  номеру" text2="Поиск по марке" text3="Поиск по названию товара" placeholder="Введите марку "/>
          <CategoryList />
        </section>
        <AdvertBlock/>
      </div>
    </BrowserRouter>
  );
};
export default App;
