import React from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Gallery from './GalleryPhotos';
import "./index.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Switch, Route, Redirect } from 'react-router';


const App = () => {
  
    return(
        <>  
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/gallery"  component={Gallery} />
            <Route  path="/about"  component={About} />
            <Route  path="/services"  component={Services} />
            <Route  path="/contact"  component={Contact} />
            <Redirect to="/" />
        </Switch>
        <Footer />
        </>
    );
}

export default App;