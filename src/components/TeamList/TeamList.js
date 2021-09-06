import React from "react";
import { NavLink, generatePath } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Routes } from "../../common/Routes";
import styles from "./TeamList.module.css";

function TeamList({ teams }) {
  return (
    <List>
      {teams.map((team, i) => (
        <ListItem
          key={i}
          button
          component={NavLink}
          to={generatePath(Routes.TEAM, { teamId: team.id })}
        >
          <img src={team.crestUrl} alt="Teams page" className={styles.image} />
          <ListItemText primary={team.name} />
        </ListItem>
      ))}
    </List>
  );
}

export default TeamList;
