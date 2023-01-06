import './App.css';
import {Route, Switch} from "react-router-dom";
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Sign from "./components/Sign/Sign";
function App() {



  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>

        <Route exact path="/sign-up">
          <Sign />
        </Route>

        <Route exact path="/sign-in">
          <Sign />
        </Route>
      </Switch>
    </>
  );
}

export default App;
