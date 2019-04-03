import { createStyles } from "@material-ui/core";

const drawerWidth:number = 200;


export const DrawerStyle = createStyles({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding:  3,
    marginTop: 60
  },
});
