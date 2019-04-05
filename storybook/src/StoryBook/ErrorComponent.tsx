import React, { FunctionComponentFactory } from "react";
import { Snackbar, SnackbarContent } from "@material-ui/core";

export const ErrorMessage = (props: { error: string }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={true}
      autoHideDuration={6000}
    >
      <SnackbarContent message={props.error} />
    </Snackbar>
  );
};

export const Error404 = () => ErrorMessage({ error: "Page not found" });
export default () => ErrorMessage({ error: "Invalid Componant" });
