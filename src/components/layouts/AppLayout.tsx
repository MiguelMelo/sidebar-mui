import { Navigate, Outlet } from "react-router-dom";

const AppLayout = () => {
  const auth = false;

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default AppLayout;
