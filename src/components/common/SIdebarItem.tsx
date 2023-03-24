import { ListItemButton, ListItemIcon } from "@mui/material";

import { RouteType } from "../../routes/configs";
import { Link } from "react-router-dom";
import { colorsConfig } from "../../configs/colorsConfig";
import { useSidebar } from "../../contexts/SidebarContext";

type Props = {
  item: RouteType;
};

const SidebarItem = ({ item }: Props) => {
  const { appState } = useSidebar();

  return item.sidebarProps && item.path ? (
    <ListItemButton
      component={Link}
      to={item.path}
      sx={{
        "&: hover": {
          backgroundColor: colorsConfig.sidebar.hoverBg,
        },
        backgroundColor:
          appState === item.state ? colorsConfig.sidebar.activeBg : "unset",
        paddingY: "10px",
        paddingX: "20px",
      }}
    >
      <ListItemIcon sx={{ color: colorsConfig.sidebar.color }}>
        {item.sidebarProps.icon && item.sidebarProps.icon}
      </ListItemIcon>
      {item.sidebarProps.displayText}
    </ListItemButton>
  ) : null;
};

export default SidebarItem;
