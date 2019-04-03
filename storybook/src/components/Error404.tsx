import React from "react";
import { Snackbar, SnackbarContent } from "@material-ui/core";

const Error404: React.FunctionComponent = () => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={true}
      autoHideDuration={6000}
    >
      <SnackbarContent message="page not found" />
    </Snackbar>
  );
};
export default Error404;
