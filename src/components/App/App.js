import "./App.css";
import Main from "../Main/Main";
import { Route, Switch } from "react-router-dom";
import Movies from "../Movies/Movies";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
