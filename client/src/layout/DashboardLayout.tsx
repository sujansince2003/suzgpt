import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";

const DashboardLayout = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/login");
    }
  }, [userId, isLoaded, navigate]);

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <div>
      <div>Dashboard</div>
      <div>menu</div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
