import React, { Suspense } from 'react';
import {Helmet} from "react-helmet";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BottomMenu from './components/BottomMenu';
import TopMenu from './components/TopMenu';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.scss';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Classes from './pages/Classes';
import Contact from './pages/Contact';

function Page() {

  return (
    <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Guba Doce Pares México</title>
          <link rel="canonical" href="https://www.gubadocepares.mx/" />
          <meta
            name="description"
            content="Conoce el estilo Guba Doce Pares, en México."
          />
        </Helmet>
        <Router>
          <NavBar/>
          <TopMenu/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/aboutUs' exact component={AboutUs}/>
            <Route path='/classes' exact component={Classes}/>
            <Route path='/contact' exact component={Contact}/>
          </Switch>
          <BottomMenu/>
          <Footer/>
        </Router>

    </div>
  );
}


const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}

export default App;
