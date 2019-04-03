import React from "react";
import AppContext from "../AppContext";
import {
  MenuList,
  MenuItem,
  withStyles,
  WithStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { MenuStyle } from "../Style/AppStyles";

export const LeftMenu = (props: WithStyles<typeof MenuStyle>) => {
  return (
    <AppContext.Consumer>
      {ctx => (
        <div className={props.classes.root}>
          <MenuList>
            {ctx.components.map(e => (
              <Link
                className={props.classes.linkStyle}
                to={`/component/${e.name}`}
              >
                <MenuItem>{e.name}</MenuItem>
              </Link>
            ))}
          </MenuList>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default withStyles(MenuStyle)(LeftMenu);
