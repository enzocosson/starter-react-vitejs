import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./componants/Header/Header";
import Accueil from "./Views/Accueil/Accueil";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Accueil} />
      </Switch>
    </Router>
  );
}

export default App;
