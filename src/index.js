import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
// dev-0rgsbpy30uhdsxiq.us.auth0.com  domin
// bCz89Psvnb2KZCss1eof9okNqZgB7QoR    client id
ReactDOM.render(
  <StrictMode>
    <Auth0Provider
      domain="dev-0rgsbpy30uhdsxiq.us.auth0.com"
      clientId="bCz89Psvnb2KZCss1eof9okNqZgB7QoR"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  </StrictMode>,
  document.getElementById("root")
);
