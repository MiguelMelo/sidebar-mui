import { Outlet } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./configs";

import BusinessIcon from "@mui/icons-material/Business";

export const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    path: "/app/patrimonio",
    element: (
      <>
        Patrimonio
        <Outlet />
      </>
    ),
    state: "patrimonio",
    sidebarProps: {
      displayText: "Patrimônio",
      icon: <BusinessIcon />,
    },
    child: [
      {
        path: "/app/patrimonio/bem",
        element: <>Bem</>,
        state: "patrimonio.bem",
        sidebarProps: {
          displayText: "BemPatrimonial",
        },
      },
      {
        path: "/app/patrimonio/veiculo",
        element: <>Patrimônio Veículo</>,
        state: "patrimonio.veiculo",
        sidebarProps: {
          displayText: "Veículo",
        },
      },
    ],
  },
];
