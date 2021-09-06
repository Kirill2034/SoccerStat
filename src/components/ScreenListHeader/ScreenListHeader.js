import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { NavLink, useLocation } from "react-router-dom";
import { Routes } from "../../common/Routes";

const routes = [Routes.LEAGUES, Routes.TEAMS];

const ScreenListHeader = () => {
  const location = useLocation();

  const value = routes.indexOf(location.pathname);

  return (
    <AppBar position="static">
      <Tabs value={value}>
        <Tab label="Лиги" component={NavLink} to={Routes.LEAGUES} />
        <Tab label="Команды" component={NavLink} to={Routes.TEAMS} />
      </Tabs>
    </AppBar>
  );
};

export default ScreenListHeader;
