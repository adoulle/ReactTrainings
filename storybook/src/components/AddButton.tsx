import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export const AddButton: React.FunctionComponent = () => {
  return (
    <Link to="/add">
      <Button>add</Button>
    </Link>
  );
};
