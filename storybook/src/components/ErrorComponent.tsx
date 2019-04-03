import React from "react";
import { Snackbar, SnackbarContent } from "@material-ui/core";

const ErrorComponent: React.FunctionComponent = () => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={true}
      autoHideDuration={6000}
    >
      <SnackbarContent message="This component does not exists" />
    </Snackbar>
  );
};
export default ErrorComponent;
