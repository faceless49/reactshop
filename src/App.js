import "./App.scss";
import Header from "./pages/header/Header";
import CategoryList from "./pages/mainPage/category/CategoryList";
import Hero from "./pages/mainPage/hero/Hero";
import SearchForm from "./pages/mainPage/searchForm/SearchForm";
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
  );
};
export default App;
