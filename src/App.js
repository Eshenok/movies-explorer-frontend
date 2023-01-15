import './App.css';
import React, {useState, useEffect} from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Sign from "./components/Sign/Sign";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";
import Movies from "./components/Movies/Movies";

function App() {

  const [header, setHeader] = useState(true);
  const history = useHistory();

  function handleLogIn() {
    history.push('./movies')
  }

  useEffect(() => {
    history.listen(() => {
      history.location.pathname === '/signin' || history.location.pathname === '/signup'
        ? setHeader(false)
        : setHeader(true)
    })
  })

  return (
    <>
      {header ? <Header /> : <></>}
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/signup">
          <Sign history={history} />
        </Route>

        <Route exact path="/signin">
          <Sign history={history} onSubmit={handleLogIn} />
        </Route>

        <Route path="/movies">
          <Movies />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
