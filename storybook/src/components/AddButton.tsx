import React from "react";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { ListItem, ListItemText } from "@material-ui/core";

export const AddButton: React.FunctionComponent = () => {
  const text:string = "Add";
  return (
    <Link to="/add">
      <ListItem button key={text}>
        <Fab color="primary" aria-label="Add">
          <AddIcon />
        </Fab>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  );
};

export default AddButton;
