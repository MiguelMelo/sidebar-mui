import { Navigate, Route, RouteProps } from "react-router-dom";
import { RouteType } from "../../routes/configs";

type Props = RouteProps &
  RouteType & {
    permission?: string;
  };

const ProtectedRoute = (props: Props) => {
  const userPermissions = ["list_bem", "list_veiculos"];

  if (props.permission) {
    userPermissions.includes(props.permission) && (
      <Route index={props.index} path={props.path} element={props.element} />
    );
  }

  return <Navigate to="/" />;
};

export default ProtectedRoute;
