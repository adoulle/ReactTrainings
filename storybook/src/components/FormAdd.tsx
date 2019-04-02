import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AppContext, { ComponentList, IComponentInfo } from "../AppContext";

export interface IAddComponent {
  list: ComponentList;
}

export interface ILocalState {
  infoForm: IComponentInfo;
  open: boolean;
}

export class FromAdd extends React.Component<IAddComponent, ILocalState> {
  state: ILocalState = {
    infoForm: {
      name: "",
      path: ""
    },
    open: false
  };

  handleClickOpen = () => {
    this.props.list.Add(this.state.infoForm);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // this.setState({ name: e.target.value });
  };

  contentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // this.setState({ path: e.target.value });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Open form dialog</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
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
              onChange={this.contentChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
