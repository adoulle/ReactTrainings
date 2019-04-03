import React from "react";
import AppContext from "../AppContext";
import {
  MenuList,
  MenuItem,
  Theme,
  withStyles,
  createStyles,
  WithStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = createStyles({
  root: {
    display: "flex"
  },
  linkStyle: {
    textDecoration: "none"
  }
});

export const LeftMenu = (props: WithStyles<typeof styles>) => {
  return (
    <AppContext.Consumer>
      {ctx => (
        <div className={props.classes.root}>
          <MenuList>
            {ctx.components.map(e => (
              <MenuItem>
                <Link
                  className={props.classes.linkStyle}
                  to={`/component/${e.name}`}
                >
                  {e.name}
                </Link>
              </MenuItem>
            ))}
          </MenuList>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default withStyles(styles)(LeftMenu);
