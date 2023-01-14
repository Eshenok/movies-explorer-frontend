import './App.css';
import React, {useState, useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Sign from "./components/Sign/Sign";
import Profile from "./components/Profile/Profile";
import Search from "./components/Search/Search";
import Films from "./components/Films/Films";
import NotFound from "./components/NotFound/NotFound";

function App() {

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>

        <Route path="/sign-up">
          <Sign />
        </Route>

        <Route exact path="/sign-in">
          <Sign />
        </Route>

        <Route path="/main">
          <Header />
          <Search />
          <Films />
          <Footer />
        </Route>

        <Route path="/profile">
          <Header />
          <Profile />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
