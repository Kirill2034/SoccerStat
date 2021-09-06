import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Routes } from "../../common/Routes";
import { NavLink, generatePath } from "react-router-dom";

function Leagues({ leagues }) {
  return (
    <List>
      {leagues.map((league, i) => (
        <ListItem
          key={i}
          button
          component={NavLink}
          to={generatePath(Routes.LEAGUE, { leagueId: league.id })}
        >
          <ListItemText primary={league.name} />
        </ListItem>
      ))}
    </List>
  );
}

export default Leagues;
