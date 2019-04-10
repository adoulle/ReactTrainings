import React from "react";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { ListItem, ListItemText } from "@material-ui/core";

type IProps = { name: string; path: string };

export default (props: IProps) => {
  const text: string = "Add";
  return (
    <Link to={props.path}>
      <ListItem button key={props.name}>
        <Fab color="primary" aria-label={props.name}>
          <AddIcon />
        </Fab>
        <ListItemText primary={props.name} />
      </ListItem>
    </Link>
  );
};
