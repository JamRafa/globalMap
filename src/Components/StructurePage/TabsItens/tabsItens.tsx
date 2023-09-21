import { History, Home } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import "./tabsItens.scss";

export default function TabsItens() {
  return (
    <div className="tabIcons">
      <Link to={"/"}>
        <ListItemButton className="iconsArea">
          <ListItemIcon>
            <Home className="icons" />
          </ListItemIcon>
          <ListItemText primary="Home" className="iconsText" />
        </ListItemButton>
      </Link>
      <Link to={"/"}>
        <ListItemButton className="iconsArea">
          <ListItemIcon>
            <History className="icons" />
          </ListItemIcon>
          <ListItemText primary="historic" className="iconsText" />
        </ListItemButton>
      </Link>
    </div>
  );
}
