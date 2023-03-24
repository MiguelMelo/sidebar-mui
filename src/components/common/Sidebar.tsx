import { Drawer, List, Stack, Toolbar, Typography } from "@mui/material";

import { sizeConfigs } from "../../configs/sizeConfigs";
import { colorsConfig } from "../../configs/colorsConfig";
import { appRoutes } from "../../routes/appRoutes";
import SidebarItem from "./SIdebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import { useSidebar } from "../../contexts/SidebarContext";

const Sidebar = () => {
  const {} = useSidebar();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          background: colorsConfig.sidebar.bg,
          color: colorsConfig.sidebar.color,
        },
      }}
    >
      <List disablePadding>
        <Toolbar
          sx={{
            marginBottom: "20px",
            backgroundColor: colorsConfig.toolbar.bg,
          }}
        >
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="center">
            <Typography>MUI</Typography>
          </Stack>
        </Toolbar>
        {appRoutes.map((route, index) =>
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
