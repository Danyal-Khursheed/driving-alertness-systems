import logo from './logo.svg';
import './App.css';
import { useLocation } from "react-router-dom";
import { createBrowserHistory } from 'history';
import PrivateRoute from './myComponents/JS files/PrivateRoute';
import { Header } from './myComponents/JS files/Header';
import { Header2 } from './myComponents/JS files/Header2';
import { Route, Router, Routes } from 'react-router-dom';
import { Home } from './myComponents/JS files/Home';
import { Application } from './myComponents/JS files/Application';
import { Services } from './myComponents/JS files/Services';
import { Subscription } from './myComponents/JS files/Subscription';
import { Complain } from './myComponents/JS files/Complain';

import Footer from './myComponents/JS files/Footer';
import { UpdateProfile } from './myComponents/JS files/UpdateProfile';
import AnimatedRoutes from './myComponents/JS files/AnimatedRoutes';
import {UpdateModel} from './myComponents/JS files/UpdateModel';
import Header3 from './myComponents/JS files/Header3';



function App() {
  const location = useLocation();

  let header;
  let footer;
  switch (location.pathname) {
    case '/complain':
      header = <Header2 />
      footer = <Footer/>
      break;

    case '/application':
      header = <Header />
      footer = <Footer/>
      break;

    case '/services':
      header = <Header />
      footer = <Footer/>
      break;

    case '/subscription':
      header = <Header />
      break;

      case '/updatemodel':
      header = <Header3 />
      footer = <Footer/>
      break;

    case '/':
      header = <Header />
      footer = <Footer/>
      break;

    case '/updateprofile':
      header = <Header2 />
      footer = <Footer/>
      break;
    default:
      break;
  }


  return (
    <>
      
        {header}
        <AnimatedRoutes />
        {footer}
      
    </>
  );
}

export default App;


