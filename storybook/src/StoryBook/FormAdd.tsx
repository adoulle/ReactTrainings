import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  useStateValue,
  ComponentInfo,
  StoryBookState
} from "./Context/AppContext";
import { History } from "history";
import { ComponantAdder } from "./Context/StoryBookActions";

export interface ILocalState {
  infoForm: ComponentInfo;
  open: boolean;
}

export default () => {
  const [state, Dispatch] = useStateValue();

  const handleAdd = (info: ComponentInfo) => {
    Dispatch(ComponantAdder(info));
    state.history.push("/");
  };

  const handleClose = () => {
    state.history.push("/");
  };

  return <FormContent handleAdd={handleAdd} handleClose={handleClose} />;
};

interface FormContentProps {
  handleAdd: (info: ComponentInfo) => void;
  handleClose: () => void;
}

class FormContent extends React.Component<FormContentProps, ILocalState> {
  state: ILocalState = {
    infoForm: {
      name: "",
      path: ""
    },
    open: true
  };

  titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentInfo: ComponentInfo = { ...this.state.infoForm };
    currentInfo.name = e.target.value;
    this.setState({ infoForm: currentInfo });
  };

  pathChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentInfo: ComponentInfo = { ...this.state.infoForm };
    currentInfo.path = e.target.value;
    this.setState({ infoForm: currentInfo });
  };

  render() {
    return (
      <>
        <div>
          {
            <Dialog
              open={this.state.open}
              onClose={() => this.props.handleClose()}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Add</DialogTitle>
              <DialogContent>
                <DialogContentText>Add new component</DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Name"
                  type="text"
                  onChange={this.titleChange}
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Path"
                  type="text"
                  onChange={this.pathChange}
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={() => this.props.handleClose()}
                  color="primary"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => this.props.handleAdd(this.state.infoForm)}
                  color="primary"
                >
                  Add component
                </Button>
              </DialogActions>
            </Dialog>
          }
        </div>
      </>
    );
  }
}
