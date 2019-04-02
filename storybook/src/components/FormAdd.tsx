import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AppContext, { ComponentList, IComponentInfo } from "../AppContext";
import { History } from "history";

export interface ILocalState {
  infoForm: IComponentInfo;
  open: boolean;
}

export class FormAdd extends React.Component<{}, ILocalState> {
  state: ILocalState = {
    infoForm: {
      name: "",
      path: ""
    },
    open: true
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleAdd = (add: (info: IComponentInfo) => void, history: History) => {
    add(this.state.infoForm);
    history.push("/");
    this.setState({ open: false });
  };

  handleClose = (history: History) => {
    history.push("/");
    this.setState({ open: false });
  };

  titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentInfo: IComponentInfo = this.state.infoForm;
    currentInfo.name = e.target.value;
    this.setState({ infoForm: currentInfo });
  };

  pathChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentInfo: IComponentInfo = this.state.infoForm;
    currentInfo.path = e.target.value;
    this.setState({ infoForm: currentInfo });
  };

  render() {
    return (
      <>
        <AppContext.Consumer>
          {({ add, history }) => (
            <div>
              <Dialog
                open={this.state.open}
                onClose={() => this.handleClose(history)}
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
                    onClick={() => this.handleClose(history)}
                    color="primary"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => this.handleAdd(add, history)}
                    color="primary"
                  >
                    Add component
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          )}
        </AppContext.Consumer>
      </>
    );
  }
}
