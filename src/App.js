import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  About,
  Auth,
  Cart,
  Checkout,
  Error,
  Products,
  SingleProduct,
  Home,
} from "./pages";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  return (
    <Auth>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/e-commerce" element={<Home />} />
          <Route path="/e-commerce/about" element={<About />} />
          <Route path="/e-commerce/cart" element={<Cart />} />
          <Route path="/e-commerce/products" element={<Products />} />
          <Route path="/e-commerce/products/:id" element={<SingleProduct />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </Auth>
  );
}

export default App;
