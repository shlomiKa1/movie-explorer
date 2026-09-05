import { Navigate, Outlet, useLocation } from "react-router-dom";
import { KEY_USER } from "../utils/types";

const Protected = () => {
  const user = localStorage.getItem(KEY_USER);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Protected;
