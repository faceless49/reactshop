import "./App.scss";
import { Header } from "./pages/header/Header";
import CategoryList from "./pages/mainPage/category/CategoryList";
import Hero from "./pages/mainPage/hero/Hero";
import SearchForm from "./pages/mainPage/searchForm/SearchForm";
import Footer from "./components/footer/Footer";
import { Products } from "./pages/mainPage/products/Products";
import { BrowserRouter } from "react-router-dom";
import { AdvertBlock } from "./pages/mainPage/advertBlock/AdvertBlock";
import { OptionSlider } from "./pages/mainPage/optionSlider/OptionSlider";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
          <Hero />
          <SearchForm />
          <CategoryList />
          <Products />
          <AdvertBlock />
          <OptionSlider />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
