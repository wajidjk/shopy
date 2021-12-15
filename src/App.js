import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/home";
import Products from "./Pages/products";
import AddProduct from "./Pages/addProduct";
import ProductDetail from "./Pages/productDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/products" element={<Products />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/addProduct" element={<AddProduct />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/products/:id" element={<ProductDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
