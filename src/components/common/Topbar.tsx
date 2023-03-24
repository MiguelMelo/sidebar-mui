import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { sizeConfigs } from "../../configs/sizeConfigs";
import { colorsConfig } from "../../configs/colorsConfig";

import MenuIcon from "@mui/icons-material/Menu";

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorsConfig.topbar.bg,
        color: colorsConfig.topbar.color,
      }}
    >
      <Toolbar sx={{ display: "flex", gap: 2 }}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">React MUI Sidebar</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
