import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import "./main.scss";

import Header from "./components/header-footer/Header";
import Footer from "./components/header-footer/Footer";
import Home from "./components/home/Home";
import About from "./components/About";
import Discography from "./components/Discography";
import Tour from "./components/Tour";
import Shop from "./components/shop/Shop";

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route
        path="/"
        render={(props) => props.location.pathname !== "/" && <Header />}
      />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/discography" component={Discography} />
      <Route exact path="/tour" component={Tour} />
      <Route exact path="/shop" component={Shop} />
      <Footer />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<Routes />, document.getElementById("root"));
