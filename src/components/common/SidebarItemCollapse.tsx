import { useEffect, useState } from "react";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { RouteType } from "../../routes/configs";
import { colorsConfig } from "../../configs/colorsConfig";
import SidebarItem from "./SIdebarItem";
import { useSidebar } from "../../contexts/SidebarContext";

type Props = {
  item: RouteType;
};

const SidebarItemCollapse = ({ item }: Props) => {
  const { appState } = useSidebar();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (item.state && appState.includes(item.state)) {
      setOpen(true);
    }
  }, [appState, item]);

  return item.sidebarProps ? (
    <>
      <ListItemButton
        onClick={() => setOpen(!open)}
        sx={{
          "&: hover": {
            backgroundColor: colorsConfig.sidebar.hoverBg,
          },
          paddingY: "10px",
          paddingX: "20px",
        }}
      >
        <ListItemIcon sx={{ color: colorsConfig.sidebar.color }}>
          {item.sidebarProps.icon && item.sidebarProps.icon}
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary={<Typography>{item.sidebarProps.displayText}</Typography>}
        />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto">
        <List>
          {item.child?.map((route, index) =>
            route.sidebarProps ? (
              route.child ? (
                <SidebarItemCollapse item={route} key={index} />
              ) : (
                <SidebarItem item={route} key={index} />
              )
            ) : null
          )}
        </List>
      </Collapse>
    </>
  ) : null;
};

export default SidebarItemCollapse;
