import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Services from "./services/Services";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Gallery from "./gallery/Gallery";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/gallery" component={Gallery} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
