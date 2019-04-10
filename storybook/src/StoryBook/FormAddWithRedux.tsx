import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AppContext, {
  StoryBookState,
  ComponentInfo,
  useStateValue
} from "./Context/AppContext";
import { History } from "history";
import { AddComponant, ComponantAdder } from "./Context/StoryBookActions";
import AddButton from "./AddButton";

export interface ILocalState {
  infoForm: ComponentInfo;
  open: boolean;
}

export default () => {
  const value: ComponentInfo = { name: "d", path: "d" };
  const [tet, dispatch] = useStateValue();
  return (
    <Button onClick={() => dispatch(ComponantAdder(value))}>ta gueule</Button>
  );
};
