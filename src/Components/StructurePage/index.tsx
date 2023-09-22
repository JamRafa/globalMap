import { KeyboardArrowLeft, Menu } from "@mui/icons-material";
import {
  Box,
  IconButton,
  List,
  ThemeProvider,
  Toolbar,
  createTheme,
  styled,
} from "@mui/material";
import { useState } from "react";
import MuiAppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import "./StructurePage.scss";
import Text from "../textFild";
import TabsItens from "./TabsItens/tabsItens";
import MapPage from "../Map";

const drawerWidth: number = 240;
const drawerWidthClosed: number = 71;


interface AppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  marginLeft: drawerWidth,
  boxShadow: "none",
  width: `calc(100% - ${drawerWidthClosed}px)`,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawers = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff", // Cor principal
    },
    secondary: {
      main: "#ff5722", // Cor secundária
    },
  },
});

export default function StructurePage() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        className="topBar"
        open={open}
        position="absolute"
        sx={{
          backgroundColor: "transparent",
          paddingLeft: 10,
          paddingTop: 0.5,
          width: '70%',
          alignItems: 'flex-start'
        }}
      >
        <Text />
      </AppBar>
      <Box  sx={{ display: "flex", height: "100vh" }} className="sideBar">
        <Drawers
          className="sideBarTabs"
          variant="permanent"
          open={open}
          PaperProps={{
            sx: {
              background: "#016A70",
              backgroundColor: "#016A70",
            },
          }}
        >
          <Toolbar
            className="toolBar"
            sx={{
              display: "flex",
              alignItems: "center",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              {open ? (
                <KeyboardArrowLeft sx={{ color: "#FFFFDD", fontSize: 35 }} />
              ) : (
                <Menu sx={{ color: "#FFFFDD", fontSize: 35 }} />
              )}
            </IconButton>
          </Toolbar>
          <List component="nav" sx={{ backgroundColor: "#22222" }}>
            <TabsItens/>
          </List>
        </Drawers>
        <MapPage/>
      </Box>
    </ThemeProvider>
  );
}
