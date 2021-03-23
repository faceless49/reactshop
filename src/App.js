import "./App.scss";
import { Header } from "./pages/header/Header";
import CategoryList from "./pages/mainPage/category/CategoryList";
import Hero from "./pages/mainPage/hero/Hero";
import SearchForm from "./pages/mainPage/searchForm/SearchForm";
<<<<<<< HEAD
// import { BrowserRouter } from "react-router-dom";
import AdvertBlock from "./pages/mainPage/advertBlock/AdvertBlock";
import Footer from "./components/footer/Footer";
import PopularSlider from "./pages/mainPage/popularSlider/PopularSlider";
import LeftMenu from "./leftMenu/LeftMenu";
=======
import Footer from "./components/footer/Footer";
import { Products } from "./pages/mainPage/products/Products";
import { BrowserRouter } from "react-router-dom";
import { AdvertBlock } from "./pages/mainPage/advertBlock/AdvertBlock";
import { OptionProducts } from "./pages/mainPage/optionProducts/OptionProducts";
>>>>>>> b863cf865e39a38d2f4f63d3b04b5e0632eed17d

function App() {
  return (
    // <BrowserRouter>
      <div className="App">
<<<<<<< HEAD
        {/* <Header />
        <section className="hero">
        <Hero/>
        </section>
        <section className="category">
          <SearchForm text1="Поиск по  номеру" text2="Поиск по марке" text3="Поиск по названию товара" placeholder="Введите марку "/>
          <CategoryList />
        </section>
        <AdvertBlock/>
        <PopularSlider/>
      <Footer/> */}

      <LeftMenu/>


      </div>
    // </BrowserRouter>
=======
        <div className="container">
          <Header />
          <Hero />
          <SearchForm />
          <CategoryList />
          <Products />
          <AdvertBlock />
          <OptionProducts/>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
>>>>>>> b863cf865e39a38d2f4f63d3b04b5e0632eed17d
  );
}
export default App;
