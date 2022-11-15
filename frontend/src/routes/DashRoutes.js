import { Navigate, Outlet } from "react-router-dom";
import DashLayout from "../components/Dashlayout";
import {useSelector} from "react-redux";
const DashRoutes = () => {
  let  token= true;
  // const {token} =useSelector((state) => state.auth)

  return token ? (
    <DashLayout>
      <Outlet />
    </DashLayout>
  ) : (
    <Navigate to="/login" />
  );
};

export default DashRoutes;
