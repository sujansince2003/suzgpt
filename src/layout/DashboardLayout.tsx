import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <div>Dashboard</div>
      <div>menu</div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
