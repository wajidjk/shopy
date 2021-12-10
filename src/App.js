import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/home";
import Products from "./Pages/products";
import AddProduct from "./Pages/addProduct";
function App() {
  return (
    <div className="App">
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
      </BrowserRouter>
    </div>
  );
}

export default App;
