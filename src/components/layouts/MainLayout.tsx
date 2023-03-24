import { Box, Toolbar } from "@mui/material";
import Topbar from "../common/Topbar";
import { sizeConfigs } from "../../configs/sizeConfigs";
import Sidebar from "../common/Sidebar";
import { colorsConfig } from "../../configs/colorsConfig";
import { Navigate, Outlet } from "react-router-dom";

const MainLayout = () => {
  const auth = true;

  return auth ? (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      <Box
        component="nav"
        sx={{ width: sizeConfigs.sidebar.width, flexShrink: 0 }}
      >
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          width: `calc(100% - ${sizeConfigs.sidebar.width})`,
          minHeight: "100vh",
          background: colorsConfig.mainBg,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  ) : (
    <Navigate to="/login" />
  );
};

export default MainLayout;
