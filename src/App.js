import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { Routes } from "./common/Routes";
import { Leagues } from "./screens/Leagues";
import { League } from "./screens/League";
import { Teams } from "./screens/Teams";
import { Team } from "./screens/Team";

function App() {
  return (
    <Switch>
      <Route path={Routes.LEAGUES} component={Leagues} exact={true} />
      <Route path={Routes.LEAGUE} component={League} />

      <Route path={Routes.TEAMS} component={Teams} exact={true} />
      <Route path={Routes.TEAM} component={Team} />

      <Redirect to={Routes.LEAGUES} />
    </Switch>
  );
}

export default App;
