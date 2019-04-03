import React from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemText } from "@material-ui/core";

export const AccueilButton: React.FunctionComponent = () => {
  const text:string = "Home";
  return (
    <Link to="/">
      <ListItem button key={text}>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  );
};

export default AccueilButton;
