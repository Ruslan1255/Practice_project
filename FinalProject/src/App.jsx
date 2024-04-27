import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./page/main/Main";
import Login from "./page/loginPage/LoginPage";
import AddToCartPage from "./page/addToCartPage/AddToCart";
import DetailPage from "./page/detailPage/DetailPage";
import ShopPage from "./page/shopPage/ShopPage";
import NotFound from "./page/notFound/NotFound";
import LikedPage from "./page/likedPage/LikedPage";
import style from "./app.module.css";

function App() {
  return (
    <div className={style.appBox}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="login" element={<Login />} />
          <Route path="yourCart" element={<AddToCartPage />} />
          <Route path="/product-details/:id" element={<DetailPage />} />
          <Route path="/shop-page/:category" element={<ShopPage />} />
          <Route path="/shop-page/category/:product" element={<ShopPage />} />
          <Route path="/shop-page/" element={<ShopPage />} />
          <Route path="/likedPage" element={<LikedPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
