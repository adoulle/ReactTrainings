import React from "react";
import MuiButton from "@material-ui/core/Button";

const Button: React.FunctionComponent = ({ children, ...props }) => {
  return (
    <MuiButton variant="contained" {...props}>
      {children}
    </MuiButton>
  );
};

export default Button;
