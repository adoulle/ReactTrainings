import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export const AccueilButton: React.FunctionComponent = () => {
  return (
    <Link to="/">
      <Button>Accueil</Button>
    </Link>
  );
};

export default AccueilButton;
